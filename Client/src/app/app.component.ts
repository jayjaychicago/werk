import { Component } from '@angular/core';
import { SocketService } from './services/socket.service';
import { RoomService } from "./services/room.service";
import { FactionService } from "./services/faction.service";
import { UserService } from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Werk';

  constructor(
    private socketService: SocketService,
    private roomService: RoomService,
    private factionService: FactionService,
    private userService: UserService)
  {
  }
}
