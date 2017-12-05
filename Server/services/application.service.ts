
import { SocketService } from "./socket.service";
import { DataService } from "./data.service";
import { UserService } from "./user.service";
import * as rx from "rxjs";

export class ApplicationService {

    private socketService: any;
    private dataService: DataService;
    private userService: UserService
    
    constructor(private server, private port: number) {
        
    }

    public start(): void {
        this.createSocketService();
        this.createDataService();        
        this.createUserService();
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
}