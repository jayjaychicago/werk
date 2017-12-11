
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from "../../models/user.model";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { SocketService } from '../../services/socket.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-component',
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit, OnDestroy {

  private _allUsersSubscription: Subscription;
  private _factionUsersAvailable: Subscription;
  public users: Array<User>;

  constructor(private userService: UserService) {
        
  }

  ngOnInit(): void {
    console.log("ngOnInit");

    this.users = new Array<User>();

    this._allUsersSubscription = this.userService.allUsersAvailable().subscribe(data => {
      console.log("All Users");

      this.users = data[0] as Array<User>

      alert(JSON.stringify(this.users));
    });

    this._factionUsersAvailable = this.userService.factionUsersAvailable().subscribe(data => {

    });

    console.log("Calling getUsers on client");
    this.userService.getUsers();
  }

  

  ngOnDestroy(): void {
    if (this._allUsersSubscription && !this._allUsersSubscription.closed)
      this._allUsersSubscription.unsubscribe;
  }

  /*public get users(): Array<User> {
    return this._users;
  }*/
}
