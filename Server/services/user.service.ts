import * as socketIo from "socket.io";
import { SocketService } from "./socket.service";
import { DataService } from "./data.service";
import {Message} from "../models/message.model";

export class UserService {

    constructor(private socketService: SocketService, private dataService: DataService) {
        this.createDataObservers();
        this.createSocketObservers();
    }

    private createDataObservers(): void {
        console.log("Creating Data Observers in UserService on server");
        this.dataService.allUsersObservable.subscribe(message => {
            console.log("allUsersObservable in UserService on server");
            message.socket.emit(message.data);
        });
    }

    private createSocketObservers(): void {
        console.log("Creating Socket Observers in UserService on server");
        

        this.socketService.connectedObservable.subscribe(socket => {
            socket.on("getUsers", () => {
                console.log("getUsers called in UserService on server");
                this.dataService.getUsers(socket);
            });
        });

        
    }
}