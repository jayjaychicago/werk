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

  private _selectedRoom: string;
  private _selectedFaction: string;
  private _selectedUser: string;

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

    this._selectedRoom = "Room";
    this._selectedFaction = "Faction";
    this._selectedUser = "User";

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

  private roomSelected(room: Room): void {
    this._selectedRoom = room.RoomName;
    this._selectedFaction = "Faction";
    this._selectedUser = "User";

    this._factions = new Array<Faction>();
    this._users = new Array<User>();
    this.getFactions(room.Id);
  }

  private factionSelected(faction: Faction): void {
    this._selectedFaction = faction.FactionName;
    this._selectedUser = "User";
    this._users = new Array<User>();
    this.getUsers(faction.Id);
  }

  private userSelected(user: User): void {
    this._selectedUser = user.UserName;
  }

  public getRooms(): void {
    this.socketService.getRooms();
  }

  public getFactions(roomId: number): void {
    this._selectedFaction = "Faction";
    this._selectedUser = "User";
    this.socketService.getFactions(roomId);
  }

  public getUsers(factionId: number): void {
    this._selectedUser = "User";
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

  public get selectedRoom(): string {
    return this._selectedRoom
  }

  public get selectedFaction(): string {
    return this._selectedFaction
  }

  public get selectedUser(): string {
    return this._selectedUser
  }
}
