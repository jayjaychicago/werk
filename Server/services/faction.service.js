"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FactionService = (function () {
    function FactionService(socketService, dataService) {
        this.socketService = socketService;
        this.dataService = dataService;
        this.createSocketObservers();
    }
    FactionService.prototype.createSocketObservers = function () {
        var _this = this;
        console.log("Creating Socket Observers in UserService on server");
        this.socketService.connectedObservable.subscribe(function (socket) {
            socket.on("getFactions", function (roomId) {
                console.log("getFactions called in FactionService on server");
                _this.dataService.getFactions(socket, roomId);
            });
        });
    };
    return FactionService;
}());
exports.FactionService = FactionService;
//# sourceMappingURL=faction.service.js.map