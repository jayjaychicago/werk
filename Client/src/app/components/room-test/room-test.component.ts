
import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { SocketService } from '../../services/socket.service';

@Component({
    selector: "room-test",
    templateUrl: "./room-test.component.html",
    styleUrls: ["./room-test.component.css"]
})
export class RoomTestComponent implements OnInit, OnDestroy {

  private _messages: Array<string>;
  private _roomMessageSubscription: Subscription;

  private _currentRoom: string;
  private _currentMessage: string;

  constructor(private socketService: SocketService) {
    this.setupSocket();
  }

  public changeRoomText(room: string) {
    this._currentRoom = room;
  }

  public changeMessageText(message: string) {
    this._currentMessage = message;
  }

  public joinRoom(): void {
    console.log("Calling joinRoom for room " + this._currentRoom);
    this.socketService.joinRoom(this._currentRoom);
  }

  public sendMessage(): void {
    console.log("Calling sendMessage for room " + this._currentRoom + " with a message of " + this._currentMessage);
    this.socketService.sendMessage(this._currentRoom, this._currentMessage);
  }

  private setupSocket(): void {
    this._roomMessageSubscription = this.socketService.roomMessageAvailable().subscribe(data => {
      this._messages.push(data);
    });
  }

  ngOnInit(): void {
    this._messages = new Array<string>();
  }

  ngOnDestroy(): void {
    if (this._roomMessageSubscription && !this._roomMessageSubscription.closed)
      this._roomMessageSubscription.unsubscribe;
  }

  public get currentRoom(): string {
    return this._currentRoom;
  }

  public get currentMessage(): string {
    return this._currentMessage;
  }

  public get messages(): Array<string> {
    return this._messages;
  }
}
