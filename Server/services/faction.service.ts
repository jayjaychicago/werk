import * as socketIo from "socket.io";
import { SocketService } from "./socket.service";
import { DataService } from "./data.service";

export class FactionService {

    constructor(private socketService: SocketService, private dataService: DataService) {
        this.createSocketObservers();
    }


    private createSocketObservers(): void {
        console.log("Creating Socket Observers in UserService on server");

        this.socketService.connectedObservable.subscribe(socket => {
            socket.on("getFactions", (roomId) => {
                console.log("getFactions called in FactionService on server");
                this.dataService.getFactions(socket, roomId);
            });
        });
    }
}