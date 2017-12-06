import * as socketIo from "socket.io";
import { SocketService } from "./socket.service";
import { DataService } from "./data.service";

export class RoomService {

    constructor(private socketService: SocketService, private dataService: DataService) {
        this.createSocketObservers();
    }


    private createSocketObservers(): void {
        console.log("Creating Socket Observers in UserService on server");

        this.socketService.connectedObservable.subscribe(socket => {
            socket.on("getRooms", () => {
                console.log("getRooms called in RoomService on server");
                this.dataService.getRooms(socket);
            });
        });
    }
}