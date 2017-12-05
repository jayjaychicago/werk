"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socketIo = require("socket.io");
var rxjs_1 = require("rxjs");
var SocketService = (function () {
    function SocketService(server, port) {
        this.server = server;
        this.port = port;
    }
    SocketService.prototype.start = function () {
        this._io = socketIo(this.server);
        this.createObservables();
    };
    SocketService.prototype.createObservables = function () {
        var _this = this;
        var self = this;
        this._connectedSubject = new rxjs_1.Subject();
        this._disconnectedSubject = new rxjs_1.Subject();
        this._io.on('connection', function (socket) {
            console.log('Connected client on port %s.', self.port);
            _this._connectedSubject.next(socket);
            socket.on('disconnect', function () {
                _this._disconnectedSubject.next(socket);
            });
        });
    };
    SocketService.prototype.createUserObservables = function (socket) {
        socket.on("getUsers", function (socket) {
            console.log("getUsers called in SocketService on server");
            //this.dataService.getUsers(socket);
        });
    };
    Object.defineProperty(SocketService.prototype, "connectedObservable", {
        get: function () {
            return this._connectedSubject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketService.prototype, "disconnectedObservable", {
        get: function () {
            return this._disconnectedSubject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketService.prototype, "io", {
        get: function () {
            return this._io;
        },
        enumerable: true,
        configurable: true
    });
    return SocketService;
}());
exports.SocketService = SocketService;
//# sourceMappingURL=socket.service.js.map