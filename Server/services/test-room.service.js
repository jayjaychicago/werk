"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestRoomService = (function () {
    function TestRoomService(socketService) {
        this.socketService = socketService;
        this.createSocketObservers();
    }
    TestRoomService.prototype.createSocketObservers = function () {
        var _this = this;
        this._io = this.socketService.io;
        this.socketService.connectedObservable.subscribe(function (socket) {
            socket.on("joinRoom", function (room) {
                console.log("joinRoom received on the server");
                socket.join(room);
            });
            socket.on("sendRoomMessage", function (room, message) {
                console.log("sendRoomMessage received on the server");
                _this._io.to(room).emit("roomMessageAvailable", message);
            });
        });
    };
    return TestRoomService;
}());
exports.TestRoomService = TestRoomService;
//# sourceMappingURL=test-room.service.js.map