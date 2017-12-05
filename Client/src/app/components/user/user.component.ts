
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from "../../models/user.model";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'user-component',
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit, OnDestroy {

  private allUsersSubscription: Subscription;
  public users: Array<User>;

  constructor(private socketService: SocketService) {
        
  }

  ngOnInit(): void {
    console.log("ngOnInit");

    this.users = new Array<User>();

    this.allUsersSubscription = this.socketService.allUsersAvailable().subscribe(data => {
      console.log("All Users");

      this.users = data[0] as Array<User>

      alert(JSON.stringify(this.users));
    });
    console.log("Calling getUsers on client");
    this.socketService.getUsers();
  }

  ngOnDestroy(): void {
    if (this.allUsersSubscription && !this.allUsersSubscription.closed)
      this.allUsersSubscription.unsubscribe;
  }

  /*public get users(): Array<User> {
    return this._users;
  }*/
}
