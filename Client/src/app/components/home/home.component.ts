import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompanyUserItem } from "../../models/CompanyUserItem";
import { UserService } from '../../services/user.service';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'home',
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {

  private _companyUsersSubscription: Subscription;
  private _companyUserItems: Array<CompanyUserItem>;

  constructor(private _userService: UserService) {
    this._companyUserItems = new Array<CompanyUserItem>();
  }

  ngOnInit(): void {
    console.log("ngOnInit");

    this._companyUserItems = new Array<CompanyUserItem>();

    this._companyUsersSubscription = this._userService.allCompanyUsersAvailable().subscribe(data => {
      this._companyUserItems = data[0] as Array<CompanyUserItem>;
    });

    console.log("Calling getCompanyUsers on client");
    this._userService.getCompanyUsers();
  }

  ngOnDestroy(): void {
    if (this._companyUsersSubscription && !this._companyUsersSubscription.closed)
      this._companyUsersSubscription.unsubscribe;
  }

  public get companyUserItems(): Array<CompanyUserItem>{
    return this._companyUserItems;
  }
}
