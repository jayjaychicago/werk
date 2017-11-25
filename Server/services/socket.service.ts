import * as socketIo from "socket.io";
import * as application from "./socket.service";
import * as data from "./data.service";
import { Subject, Observable } from "rxjs";

export class SocketService {

    private _io: any;
    private _connectedSubject: Subject<boolean>;

    private _connected: boolean

    constructor(private server, private port: number) {

    }

    public start(): void {
        this._io = socketIo(this.server);
        this.createObservables();
    }

    private createObservables() {

        const self = this;

        this._io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', self.port);

            this._connected = true;
            this._connectedSubject.next(this._connected);
            
            socket.on('disconnect', () => {
                this._connected = false;
                this._connectedSubject.next(this._connected);
            });
        });
    }

    public get connectedObservable(): Observable<boolean> {
        return this._connectedSubject as Observable<boolean>;
    }

    public get io(): any {
        return this._io;
    }

    public get connected(): boolean{
        return this._connected;
    }
}
