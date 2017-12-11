import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";
import { Subject } from "rxjs/Subject";

import { SocketService } from "../services/socket.service";

@Injectable()
export class UserService {

  private _io: any;

  constructor(private socketService: SocketService) {
    this._io = socketService.io;
  }

  public allUsersAvailable(): Observable<Array<any>> {
    return new Observable(observer => {
      this._io.on("allUsersAvailable", data => {
        observer.next(data);
      });
    });
  }

  public factionUsersAvailable(): Observable<Array<any>> {
    return new Observable(observer => {
      this._io.on("factionUsersAvailable", data => {
        observer.next(data);
      });
    });
  }

  public getUsers(): void {
    console.log("Emiting getUsers in socket.service on Client");
    this._io.emit("getUsers");
  }

  public getFactionUsers(factionId: number): void {
    this._io.emit("getFactionUsers", factionId);
  }
}
