import { Component, OnInit, OnDestroy } from '@angular/core';
import { Room } from "../../models/room.model";
import { Faction } from "../../models/faction.model";
import { User } from "../../models/user.model";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { SocketService } from '../../services/socket.service';

@Component({
  selector: "room-tree",
  templateUrl: "./room-tree.component.html",
  styleUrls: ["./room-tree.component.css"]
})
export class RoomTreeComponent implements OnInit, OnDestroy {

  public _rooms: Array<Room>;
  public _factions: Array<Faction>;
  public _users: Array<User>;
  private allRoomsSubscription: Subscription;
  private allFactionsSubscription: Subscription;
  private factionUsersSubscription: Subscription;

  /*nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];*/
  
  constructor(private socketService: SocketService) {
    
  }

  ngOnInit(): void {
    console.log("ngOnInit");

    this._rooms = new Array<Room>();

    this.allRoomsSubscription = this.socketService.allRoomsAvailable().subscribe(data => {
      console.log("all rooms received");
      this._rooms = data[0] as Array<Room>;
    });

    this.allFactionsSubscription = this.socketService.allFactionsAvailable().subscribe(data => {
      console.log("all factions received");
      this._factions = data[0] as Array<Faction>;
    });

    this.factionUsersSubscription = this.socketService.factionUsersAvailable().subscribe(data => {
      console.log("all users received");
      this._users = data[0] as Array<User>;
    });

    console.log("Calling getRooms on client");
    this.socketService.getRooms();
  }

  ngOnDestroy(): void {
    if (this.allRoomsSubscription && !this.allRoomsSubscription.closed)
      this.allRoomsSubscription.unsubscribe;

    if (this.allFactionsSubscription && !this.allFactionsSubscription.closed)
      this.allFactionsSubscription.unsubscribe;
  }

  public get_rooms(): void {
    this.socketService.getRooms();
  }

  public getFactions(roomId: number): void {
    this.socketService.getFactions(roomId);
  }

  public getUsers(factionId: number): void {
    this.socketService.getFactionUsers(factionId);
  }
  
  public get rooms(): Array<Room> {
    return this._rooms;
  }

  public get factions(): Array<Faction> {
    return this._factions;
  }

  public get users(): Array<User> {
    return this._users;
  }
}
