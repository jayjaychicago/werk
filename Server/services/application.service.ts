
import { SocketService } from "./socket.service";
import { DataService } from "./data.service";
import { UserService } from "./user.service"; 
import { RoomService } from "./room.service";
import { FactionService } from "./faction.service";
import * as rx from "rxjs";

export class ApplicationService {

    private socketService: any;
    private dataService: DataService;
    private userService: UserService;
    private roomService: RoomService;
    private factionService: FactionService;
    
    constructor(private server, private port: number) {
        
    }

    public start(): void {
        this.createSocketService();
        this.createDataService();        
        this.createUserService();
        this.createRoomService();
        this.createFactionService();
    }

    private createSocketService(): void {
        console.log("Creating SocketService on server");
        this.socketService = new SocketService(this.server, this.port);
        this.socketService.start();
    }

    private createDataService(): void {
        console.log("Creating DataService on server");
        this.dataService = new DataService();
    }

    private createUserService(): void{
        console.log("Creating UserService on server");
        this.userService = new UserService(this.socketService, this.dataService);
    }

    private createRoomService(): void {
        console.log("Creating RoomService on server");
        this.roomService = new RoomService(this.socketService, this.dataService);
    }

    private createFactionService(): void {
        console.log("Creating FactionService on server");
        this.factionService = new FactionService(this.socketService, this.dataService);
    }
}