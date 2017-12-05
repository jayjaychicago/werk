"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserService = (function () {
    function UserService(socketService, dataService) {
        this.socketService = socketService;
        this.dataService = dataService;
        this.createDataObservers();
        this.createSocketObservers();
    }
    UserService.prototype.createDataObservers = function () {
        console.log("Creating Data Observers in UserService on server");
        this.dataService.allUsersObservable.subscribe(function (message) {
            console.log("allUsersObservable in UserService on server");
            message.socket.emit(message.data);
        });
    };
    UserService.prototype.createSocketObservers = function () {
        var _this = this;
        console.log("Creating Socket Observers in UserService on server");
        this.socketService.connectedObservable.subscribe(function (socket) {
            socket.on("getUsers", function () {
                console.log("getUsers called in UserService on server");
                _this.dataService.getUsers(socket);
            });
        });
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map