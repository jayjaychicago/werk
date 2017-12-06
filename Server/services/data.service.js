"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mySql = require("mysql");
var rx = require("rxjs");
var DataService = (function () {
    function DataService() {
        this.configureObservables();
        this.configurePool();
    }
    DataService.prototype.configureObservables = function () {
        this.allUserSubject = new rx.Subject();
    };
    DataService.prototype.configurePool = function () {
        this.pool = mySql.createPool({
            connectionLimit: 1000,
            host: "werk.cj9exqhmef1n.us-east-1.rds.amazonaws.com",
            port: 3306,
            user: "root",
            password: "Canada123!!!",
            database: "werk"
        });
    };
    DataService.prototype.getUsers = function (socket) {
        var self = this;
        this.pool.getConnection(function (err, connection) {
            if (!err) {
                connection.query("call get_users", function (err, rows, fields) {
                    if (!err) {
                        socket.emit("allUsersAvailable", rows);
                    }
                    else {
                        console.log("Error while performing Query. " + err);
                    }
                });
                connection.release();
            }
            else {
                console.log("Error while performing connection. " + err);
            }
        });
    };
    DataService.prototype.getRooms = function (socket) {
        var self = this;
        this.pool.getConnection(function (err, connection) {
            if (!err) {
                connection.query("call get_rooms", function (err, rows, fields) {
                    if (!err) {
                        socket.emit("allRoomsAvailable", rows);
                    }
                    else {
                        console.log("Error while performing Query. " + err);
                    }
                });
                connection.release();
            }
            else {
                console.log("Error while performing connection. " + err);
            }
        });
    };
    DataService.prototype.getFactions = function (socket, roomId) {
        var self = this;
        this.pool.getConnection(function (err, connection) {
            if (!err) {
                connection.query("call get_factions(" + roomId + ")", function (err, rows, fields) {
                    if (!err) {
                        socket.emit("allFactionsAvailable", rows);
                    }
                    else {
                        console.log("Error while performing Query. " + err);
                    }
                });
                connection.release();
            }
            else {
                console.log("Error while performing connection. " + err);
            }
        });
    };
    DataService.prototype.getFactionUsers = function (socket, factionId) {
        var self = this;
        this.pool.getConnection(function (err, connection) {
            if (!err) {
                connection.query("call get_faction_users(" + factionId + ")", function (err, rows, fields) {
                    if (!err) {
                        socket.emit("factionUsersAvailable", rows);
                    }
                    else {
                        console.log("Error while performing Query. " + err);
                    }
                });
                connection.release();
            }
            else {
                console.log("Error while performing connection. " + err);
            }
        });
    };
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map