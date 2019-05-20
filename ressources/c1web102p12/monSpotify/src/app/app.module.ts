import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthorizationComponent } from './user-authorization/user-authorization.component';
import { MonSpotifyService } from './mon-spotify.service';
import { PlayListComponent } from './play-list/play-list.component';
import { ListPlaylistService } from './listplaylist.service';
import { PlaylistTracksComponent } from './playlist-tracks/playlist-tracks.component';
import { CreateplaylistComponent } from './createplaylist/createplaylist.component';
import { NewplaylistService } from './newplaylist.service';

import{FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserAuthorizationComponent,
    PlayListComponent,
    PlaylistTracksComponent,
    CreateplaylistComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [MonSpotifyService,ListPlaylistService,NewplaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
