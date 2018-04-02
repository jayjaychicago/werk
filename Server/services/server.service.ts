import * as express from "express";
import * as http from "http";

import { ApplicationService } from "./application.service";

export class Server {

    public static readonly PORT: number = 3000;

    private io: any;
    public app: any;
    private server: any;
    
    private port: string | number;
    private applicationService: any;
    
    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.createApplicationService();
        this.listen();        
    }

    private createApp(): void {
        this.app = express();
        this.app.use(express.static('static'));
        this.app.use('/', express.static('static', { index: 'index.html' }));
    }
    
    private createServer(): void {
        this.server = http.createServer(this.app);
    }
    
    private config(): void {
        //this.port = process.env.PORT || Server.PORT;
        this.port = Server.PORT;
    }

    private createApplicationService() {
        console.log("Creating ApplicationService on server");
        this.applicationService = new ApplicationService(this.server, Server.PORT);
        this.applicationService.start();
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });
    }
}