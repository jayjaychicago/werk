"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socketIo = require("socket.io");
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
        this._io.on('connect', function (socket) {
            console.log('Connected client on port %s.', self.port);
            _this._connected = true;
            _this._connectedSubject.next(_this._connected);
            socket.on('disconnect', function () {
                _this._connected = false;
                _this._connectedSubject.next(_this._connected);
            });
        });
    };
    Object.defineProperty(SocketService.prototype, "connectedObservable", {
        get: function () {
            return this._connectedSubject;
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
    Object.defineProperty(SocketService.prototype, "connected", {
        get: function () {
            return this._connected;
        },
        enumerable: true,
        configurable: true
    });
    return SocketService;
}());
exports.SocketService = SocketService;
//# sourceMappingURL=socket.service.js.map