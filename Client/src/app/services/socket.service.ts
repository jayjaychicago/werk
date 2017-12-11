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

  private socket;
  
  constructor() {
    this.start();
  }

  public start(): void {
    console.log("connecting to socket in client");
    this.socket = socketIo(SERVER_URL);
  }

  public allUsersAvailable(): Observable<Array<any>> {
    return new Observable(observer => {
      this.socket.on("allUsersAvailable", data => {
        observer.next(data);
      });
    });
  }

  public allRoomsAvailable(): Observable<Array<any>> {
    return new Observable(observer => {
      this.socket.on("allRoomsAvailable", data => {
        observer.next(data);
      });
    });
  }

  public allFactionsAvailable(): Observable<Array<any>> {
    return new Observable(observer => {
      this.socket.on("allFactionsAvailable", data => {
        observer.next(data);
      });
    });
  }

  public factionUsersAvailable(): Observable<Array<any>> {
    return new Observable(observer => {
      this.socket.on("factionUsersAvailable", data => {
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

  public getRooms(): void {
    console.log("Emiting getRooms in socket.service on Client");
    this.socket.emit("getRooms");
  }

  public getFactions(roomId: number): void {
    console.log("Emiting getFactions in socket.service on Client");
    this.socket.emit("getFactions", roomId);
  }

  public getFactionUsers(factionId: number): void {
    console.log("Emiting getFactionUsers in socket.service on Client");
    this.socket.emit("getFactionUsers", factionId);
  }


}
