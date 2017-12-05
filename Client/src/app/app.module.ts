import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BreakRoomComponent } from './components/break-room/break-room.component';
import { UserComponent } from './components/user/user.component';
import { SocketService } from './services/socket.service';

const appRoutes: Routes = [
  { path: 'break-room', component: BreakRoomComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }/*,
  { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BreakRoomComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
