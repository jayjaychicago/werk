import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";
import { Subject } from "rxjs/Subject";

import { SocketService } from "../services/socket.service";

@Injectable()
export class RoomService {

  private _io: any;

  constructor(private socketService: SocketService) {
    this._io = socketService.io;
  }

  public allRoomsAvailable(): Observable<Array<any>> {
    return new Observable(observer => {
      this._io.on("allRoomsAvailable", data => {
        observer.next(data);
      });
    });
  }

  public getRooms(): void {
    console.log("Emiting getRooms in RoomService.service on Client");
    this._io.emit("getRooms");
  }
}
