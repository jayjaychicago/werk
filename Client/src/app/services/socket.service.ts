import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";
import { Subject } from "rxjs/Subject";
import * as socketIo from "socket.io-client";
import { Message } from "../models/message.model";

const SERVER_URL: string = "http://localhost:3000";
//const SERVER_URL: string = "http://www.squwak.com:3000";

@Injectable()
export class SocketService {

  private _io;
  
  constructor() {
    this.start();
  }

  public start(): void {
    console.log("connecting to _io in client");
    this._io = socketIo(SERVER_URL);
  }

  // Room test items

  public joinRoom(room: string) {
    this._io.emit("joinRoom", room);
  }

  public roomMessageAvailable(): Observable<string> {
    return new Observable(observer => {
      this._io.on("roomMessageAvailable", data => {
        observer.next(data);
      });
    });
  }

  public sendMessage(room: string, message: string) {
    this._io.emit("sendRoomMessage", room, message);
  }

  // End room test items
  
  public connect(): Observable<any> {
    return new Observable(observer => {
      this._io.on('connect', () => observer.next());
    });
  }
  
  public disconnect(): Observable<any> {
    return new Observable(observer => {
      this._io.on('disconnect', () => observer.next());
    });
  }
  
  public get io() {
    return this._io;
  }

}
