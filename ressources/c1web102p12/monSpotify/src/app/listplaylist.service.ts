import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListPlaylistService {
  httpOptions;

 playlistURL:string = "http://localhost:4200";

 requestURL = "https://api.spotify.com/v1/me/playlists";
 playlist_id;

 constructor(private http: HttpClient) {

 this.httpOptions = {
   headers : new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('token')}),
 responseType:'json',};
 }
 getPlaylist(){return this.http.get(this.requestURL,this.httpOptions)};

 
 getTrackPlaylist(playlist_id){return this.http.get('https://api.spotify.com/v1/playlists/'+playlist_id+'/tracks',this.httpOptions)};

 getCreatePlaylist(){}
}