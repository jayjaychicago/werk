"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoomService = (function () {
    function RoomService(socketService, dataService) {
        this.socketService = socketService;
        this.dataService = dataService;
        this.createSocketObservers();
    }
    RoomService.prototype.createSocketObservers = function () {
        var _this = this;
        console.log("Creating Socket Observers in UserService on server");
        this.socketService.connectedObservable.subscribe(function (socket) {
            socket.on("getRooms", function () {
                console.log("getRooms called in RoomService on server");
                _this.dataService.getRooms(socket);
            });
        });
    };
    return RoomService;
}());
exports.RoomService = RoomService;
//# sourceMappingURL=room.service.js.map