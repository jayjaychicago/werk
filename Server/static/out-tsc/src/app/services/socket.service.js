"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var socketIo = require("socket.io-client");
var SERVER_URL = "http://localhost:8080";
var SocketService = (function () {
    function SocketService() {
        this.start();
    }
    SocketService.prototype.subscribe = function () {
        this.socket.on("allUsersAvailable", function (message) {
            var users = message.data;
        });
    };
    SocketService.prototype.start = function () {
        this.socket = socketIo(SERVER_URL);
        this.subscribe();
        this.getUsers();
    };
    SocketService.prototype.connect = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on('connect', function () { return observer.next(); });
        });
    };
    SocketService.prototype.disconnect = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on('disconnect', function () { return observer.next(); });
        });
    };
    SocketService.prototype.getUsers = function () {
        this.socket.emit("getUsers");
    };
    SocketService.prototype.allUsersAvailable = function () {
        return this.allUsersAvailableSubject;
    };
    ;
    return SocketService;
}());
SocketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], SocketService);
exports.SocketService = SocketService;
//# sourceMappingURL=socket.service.js.map