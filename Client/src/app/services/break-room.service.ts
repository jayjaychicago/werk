import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";
import { Subject } from "rxjs/Subject";

import { SocketService } from '../services/socket.service';

@Injectable()
export class BreakRoomService {
  constructor(private socketService: SocketService) {

  }
}
