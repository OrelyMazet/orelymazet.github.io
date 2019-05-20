import { Component } from '@angular/core';
import {PlayListComponent} from './play-list/play-list.component';
import { MonSpotifyService } from './mon-spotify.service';
import { ListPlaylistService } from './listplaylist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MonSpotify';
  constructor(private monSpotifyService: MonSpotifyService, private listPlaylistService: ListPlaylistService){}
}
