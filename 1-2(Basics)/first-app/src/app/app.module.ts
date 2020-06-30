import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { DetailsComponent } from './details/details.component'; // enable ngModel

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    UserComponent,
    DetailsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
