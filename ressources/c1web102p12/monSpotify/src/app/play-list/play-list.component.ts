import { Component, OnInit } from '@angular/core';
import { ListPlaylistService} from '../listplaylist.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {
  playlist;
  trackplaylist;
  playlist_id;

  constructor(private listplaylistservice : ListPlaylistService) {}
  ngOnInit(){
    if (localStorage.getItem('token'))
    { 
      this.listplaylistservice.getPlaylist().subscribe((res)=>{
        this.playlist=res;
        console.log("RETOUR REQUETE GET_PLAYLIST: ", this.playlist);
      });
    }
  //  if (this.playlist)
  //  {
    // this.listplaylistservice.getTrackPlaylist(this.playlist_id);
    // };
}
}