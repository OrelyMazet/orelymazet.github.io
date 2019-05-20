import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewplaylistService {
  user_ID:string;

  createPlaylist:string;
  
  readonly client_ID:'c2b2686b3aca4c22b87eaf3ea1e07b40';
  readonly redirect_URI: string = 'http://localhost:4200';
  readonly scopes : string = 'user-read-private user-read-email playlist-read-private playlist-modify-public playlist-modify-private';
  requestURL: string ='https://api.spotify.com/v1/users/{user_id}/playlists='+this.user_ID+'&response_type=token&redirect_uri='+
  this.redirect_URI +
  '&scope=' +
  this.scopes;

  httpOptions;

  constructor(private http:HttpClient) { this.httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('token')}),
 responseType:'json'};
 }
 getUser_ID(){return this.http.get('https://api.spotify.com/v1/me', this.httpOptions)};
 
 CreatePlaylist(laPlaylist){console.log(laPlaylist);
  return this.http.post('https://api.spotify.com/v1/users/${user_id}/playlists',laPlaylist,this.httpOptions,)

}
}

