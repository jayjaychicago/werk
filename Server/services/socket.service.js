"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socketIo = require("socket.io");
var SocketService = (function () {
    function SocketService(server, port) {
        this.server = server;
        this.port = port;
    }
    SocketService.prototype.start = function () {
        this.io = socketIo(this.server);
        this.createObservables();
    };
    SocketService.prototype.createObservables = function () {
        var _this = this;
        var self = this;
        this.io.on('connect', function (socket) {
            console.log('Connected client on port %s.', self.port);
            socket.on('message', function (m) {
                console.log('[server](message): %s', JSON.stringify(m));
                _this.io.emit('message', m);
            });
            socket.on('disconnect', function () {
                console.log('Client disconnected');
            });
        });
    };
    return SocketService;
}());
exports.SocketService = SocketService;
//# sourceMappingURL=socket.service.js.map