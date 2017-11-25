
import { SocketService } from "./socket.service";
import * as data from "./data.service";
import * as rx from "rxjs";

export class ApplicationService {

    private socketService: any;
    private dataService: data.DataService;
    
    constructor(private server, private port: number) {
        
    }

    public start(): void {
        
    }

    private createSocketService(): void {
        this.socketService = new SocketService(this.server, this.port);
        this.socketService.start();

        
    }

    private createDataService(): void {
        this.dataService = new data.DataService();
    }
    
}