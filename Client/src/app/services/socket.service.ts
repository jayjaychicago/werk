
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import * as socketIo from "socket.io-client";

const SERVER_URL: string = "http://localhost:8080";

@Injectable()
export class SocketService {

  private socket;

  constructor() {

  }

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public onConnect(): Observable<any> {

    return new Observable(observer => {
      this.socket.on('connect', () => observer.next());
    });

  }
  
  public onDisconnect(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('disconnect', () => observer.next());
    });
  }
}
