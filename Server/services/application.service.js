"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_service_1 = require("./socket.service");
var data = require("./data.service");
var ApplicationService = (function () {
    function ApplicationService(server, port) {
        this.server = server;
        this.port = port;
    }
    ApplicationService.prototype.start = function () {
    };
    ApplicationService.prototype.createSocketService = function () {
        this.socketService = new socket_service_1.SocketService(this.server, this.port);
        this.socketService.start();
    };
    ApplicationService.prototype.createDataService = function () {
        this.dataService = new data.DataService();
    };
    return ApplicationService;
}());
exports.ApplicationService = ApplicationService;
//# sourceMappingURL=application.service.js.map