import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";
import { Subject } from "rxjs/Subject";

import { SocketService } from "../services/socket.service";

@Injectable()
export class FactionService {

  private _io: any;

  constructor(private socketService: SocketService) {
    this._io = socketService.io;
  }

  public allFactionsAvailable(): Observable<Array<any>> {
    return new Observable(observer => {
      this._io.on("allFactionsAvailable", data => {
        observer.next(data);
      });
    });
  }

  public getFactions(roomId: number): void {
    console.log("Emiting getFactions in _io.service on Client");
    this._io.emit("getFactions", roomId);
  }
}
