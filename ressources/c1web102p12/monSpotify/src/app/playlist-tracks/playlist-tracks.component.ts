import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ListPlaylistService} from '../listplaylist.service';

@Component({
  selector: 'app-playlist-tracks',
  templateUrl: './playlist-tracks.component.html',
  styleUrls: ['./playlist-tracks.component.css']
})
export class PlaylistTracksComponent implements OnInit {
  playlist_id;
  trackplaylist;
  constructor(private _activatedRoute:ActivatedRoute,private listplaylistservice : ListPlaylistService) { }

  ngOnInit() {
    this.playlist_id= this._activatedRoute.snapshot.paramMap.get('id');
    this.listplaylistservice.getTrackPlaylist(this.playlist_id).subscribe(
      (resTrack)=>{
        this.trackplaylist=resTrack;
      });
   //this._activatedRoute.getTrackPlaylist(this.playlist_id);
   };
}
