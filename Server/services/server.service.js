"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http = require("http");
var application_service_1 = require("./application.service");
var Server = (function () {
    function Server() {
        this.createApp();
        this.config();
        this.createServer();
        this.createApplicationService();
        this.listen();
    }
    Server.prototype.createApp = function () {
        this.app = express();
        this.app.use(express.static('static'));
        this.app.use('/', express.static('static', { index: 'index.html' }));
    };
    Server.prototype.createServer = function () {
        this.server = http.createServer(this.app);
    };
    Server.prototype.config = function () {
        //this.port = process.env.PORT || Server.PORT;
        this.port = Server.PORT;
    };
    Server.prototype.createApplicationService = function () {
        console.log("Creating ApplicationService on server");
        this.applicationService = new application_service_1.ApplicationService(this.server, Server.PORT);
        this.applicationService.start();
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.server.listen(this.port, function () {
            console.log('Running server on port %s', _this.port);
        });
    };
    return Server;
}());
Server.PORT = 3000;
exports.Server = Server;
//# sourceMappingURL=server.service.js.map