import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { TreeModule } from "angular-tree-component";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { BreakRoomComponent } from "./components/break-room/break-room.component";
import { UserComponent } from "./components/user/user.component";
import { UserChatItemComponent } from "./components/user-chat-item/user-chat-item.component";
import { SocketService } from "./services/socket.service";
import { RoomService } from "./services/room.service";
import { FactionService } from "./services/faction.service";
import { UserService } from "./services/user.service";
import { RoomTreeComponent } from "./components/room-tree/room-tree.component";
import { RoomTestComponent } from "./components/room-test/room-test.component";

const appRoutes: Routes = [
  { path: "break-room", component: BreakRoomComponent },
  { path: "home", component: HomeComponent },
  { path: "user", component: UserComponent },
  { path: "room-test", component: RoomTestComponent },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }/*,
  { path: "**", component: PageNotFoundComponent }*/
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BreakRoomComponent,
    UserComponent,
    UserChatItemComponent,
    RoomTreeComponent,
    RoomTestComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    TreeModule,
    BrowserModule,
    FormsModule
  ],
  providers: [SocketService, RoomService, FactionService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
