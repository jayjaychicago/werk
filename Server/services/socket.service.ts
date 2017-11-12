import * as socketIo from "socket.io";
import * as application from "./socket.service";

export class SocketService {

    private io: any;

    constructor(private server, private port: number) {

    }

    public start(): void {
        this.io = socketIo(this.server);
        this.createObservables();
    }

    public createObservables() {

        const self = this;

        this.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', self.port);

            socket.on('message', (m: string) => {
                console.log('[server](message): %s', JSON.stringify(m));
                this.io.emit('message', m);
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }
}
