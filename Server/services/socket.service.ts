import * as socketIo from "socket.io";
import * as application from "./socket.service";
import * as data from "./data.service";
import { Subject, Observable } from "rxjs";

export class SocketService {

    private _io: any;
    private _connectedSubject: Subject<any>;
    private _disconnectedSubject: Subject<any>;

    constructor(private server, private port: number) {

    }

    public start(): void {
        this._io = socketIo(this.server);
        this.createObservables();
    }

    private createObservables() {

        const self = this;

        this._connectedSubject = new Subject<boolean>();
        this._disconnectedSubject = new Subject<any>();

        this._io.on('connection', (socket: any) => {
            console.log('Connected client on port %s.', self.port);

            this._connectedSubject.next(socket);
            
            socket.on('disconnect', () => {
                this._disconnectedSubject.next(socket);
            });

            
        });
    }

    public createUserObservables(socket: any) {
        socket.on("getUsers", (socket) => {
            console.log("getUsers called in SocketService on server");
            //this.dataService.getUsers(socket);
        });
    }

    public get connectedObservable(): Observable<any> {
        return this._connectedSubject as Observable<any>;
    }

    public get disconnectedObservable(): Observable<any> {
        return this._disconnectedSubject as Observable<any>;
    }

    public get io(): any {
        return this._io;
    }
}
