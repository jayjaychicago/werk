"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserService = (function () {
    function UserService(socketService, dataService) {
        this.socketService = socketService;
        this.dataService = dataService;
        this.createSocketObservers();
    }
    UserService.prototype.createSocketObservers = function () {
        var _this = this;
        console.log("Creating Socket Observers in UserService on server");
        this.socketService.connectedObservable.subscribe(function (socket) {
            socket.on("getUsers", function () {
                console.log("getUsers called in UserService on server");
                _this.dataService.getUsers(socket);
            });
            socket.on("getFactionUsers", function (factionId) {
                console.log("getFactionUsers called in UserService on server");
                _this.dataService.getFactionUsers(socket, factionId);
            });
        });
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map