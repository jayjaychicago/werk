import * as express from "express";
import * as http from "http";

import { ApplicationService } from "./application.service";

export class Server {

    public static readonly PORT: number = 8080;

    public app: any;
    private server: any;
    
    private port: string | number;
    private applicationService: any;
    
    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.listen();
        this.createApplicationService();
    }

    private createApp(): void {
        this.app = express();
    }
    
    private createServer(): void {
        this.server = http.createServer(this.app);
    }
    
    private config(): void {
        //this.port = process.env.PORT || Server.PORT;
        this.port = Server.PORT;
    }

    private createApplicationService() {
        this.applicationService = new ApplicationService(this.server, Server.PORT);
        this.applicationService.start();
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });
    }
}