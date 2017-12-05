
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";
import { Subject } from "rxjs/Subject";
import * as socketIo from "socket.io-client";
import { Message } from "../models/message.model";

const SERVER_URL: string = "http://localhost:3000";

@Injectable()
export class SocketService {

  private socket;
  private allUsersAvailableSubject: Subject<Array<any>>;

  constructor() {
    this.start();
  }

  public start(): void {
    this.allUsersAvailableSubject = new Subject<Array<any>>();
    console.log("connecting to socket in client");
    this.socket = socketIo(SERVER_URL);
  }

  public allUsersAvailable(): Observable<Array<any>> {
    return new Observable(observer => {
      this.socket.on("allUsersAvailable", data => {
        var users = data;
        observer.next(data);
      });
    });
  }

  public connect(): Observable<any> {

    return new Observable(observer => {
      this.socket.on('connect', () => observer.next());
    });

  }
  
  public disconnect(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('disconnect', () => observer.next());
    });
  }

  public getUsers(): void {
    console.log("Emiting getUsers in socket.service on Client");
    this.socket.emit("getUsers");
  }
}
