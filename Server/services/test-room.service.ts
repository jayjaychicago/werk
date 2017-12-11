import * as socketIo from "socket.io";
import { SocketService } from "./socket.service";
import { DataService } from "./data.service";
import { Message } from "../models/message.model";

export class TestRoomService {

    private _io: any;

    constructor(private socketService: SocketService) {
        this.createSocketObservers();
    }

    private createSocketObservers(): void {
        this._io = this.socketService.io;

        this.socketService.connectedObservable.subscribe(socket => {
            socket.on("joinRoom", (room: string) => {
                console.log("joinRoom received on the server");
                socket.join(room);
            });

            socket.on("sendRoomMessage", (room: string, message: string) => {
                console.log("sendRoomMessage received on the server");
                this._io.to(room).emit("roomMessageAvailable", message);
            });
        });
    }
}