"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_service_1 = require("./socket.service");
var data_service_1 = require("./data.service");
var user_service_1 = require("./user.service");
var room_service_1 = require("./room.service");
var faction_service_1 = require("./faction.service");
var ApplicationService = (function () {
    function ApplicationService(server, port) {
        this.server = server;
        this.port = port;
    }
    ApplicationService.prototype.start = function () {
        this.createSocketService();
        this.createDataService();
        this.createUserService();
        this.createRoomService();
        this.createFactionService();
    };
    ApplicationService.prototype.createSocketService = function () {
        console.log("Creating SocketService on server");
        this.socketService = new socket_service_1.SocketService(this.server, this.port);
        this.socketService.start();
    };
    ApplicationService.prototype.createDataService = function () {
        console.log("Creating DataService on server");
        this.dataService = new data_service_1.DataService();
    };
    ApplicationService.prototype.createUserService = function () {
        console.log("Creating UserService on server");
        this.userService = new user_service_1.UserService(this.socketService, this.dataService);
    };
    ApplicationService.prototype.createRoomService = function () {
        console.log("Creating RoomService on server");
        this.roomService = new room_service_1.RoomService(this.socketService, this.dataService);
    };
    ApplicationService.prototype.createFactionService = function () {
        console.log("Creating FactionService on server");
        this.factionService = new faction_service_1.FactionService(this.socketService, this.dataService);
    };
    return ApplicationService;
}());
exports.ApplicationService = ApplicationService;
//# sourceMappingURL=application.service.js.map