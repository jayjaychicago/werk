
import { SocketService }  from "./socket.service";

export class ApplicationService {

    private socketService: any;
    
    constructor(private server, private port: number) {
        
    }

    public start(): void {
        this.socketService = new SocketService(this.server, this.port);
        this.socketService.start();
    }

    
}