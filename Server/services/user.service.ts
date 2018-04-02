import * as socketIo from "socket.io";
import { SocketService } from "./socket.service";
import { DataService } from "./data.service";
import {Message} from "../models/message.model";

export class UserService {

    constructor(private socketService: SocketService, private dataService: DataService) {
        this.createSocketObservers();
    }
    
    private createSocketObservers(): void {
        console.log("Creating Socket Observers in UserService on server");
        
        this.socketService.connectedObservable.subscribe(socket => {
            socket.on("getUsers", () => {
                console.log("getUsers called in UserService on server");
                this.dataService.getUsers(socket);
            });

            socket.on("getFactionUsers", (factionId) => {
                console.log("getFactionUsers called in UserService on server");
                this.dataService.getFactionUsers(socket, factionId);
            });

            socket.on("getCompanyUsers", (factionId) => {
                console.log("getCompanyUsers called in UserService on server");
                this.dataService.getCompanyUsers(socket);
            });
        });

        
    }
}