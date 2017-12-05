"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = (function () {
    function Message(_socket, _data) {
        this._socket = _socket;
        this._data = _data;
    }
    Object.defineProperty(Message.prototype, "socket", {
        get: function () {
            return this.socket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.model.js.map