import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonSpotifyService {
  readonly client_ID: string = 'c2b2686b3aca4c22b87eaf3ea1e07b40';
  readonly redirect_URI: string = 'http://localhost:4200/login';
  readonly scopes : string = 'user-read-private user-read-email playlist-read-private playlist-modify-public playlist-modify-private';
  authorizeURL : string = 'https://accounts.spotify.com/authorize?client_id='+ //déclare nvelle variablé
  this.client_ID +
  '&response_type=token&redirect_uri='+
  this.redirect_URI +
  '&scope=' +
  this.scopes;
  constructor (){}
  
  saveToken(frags: URLSearchParams)
  {
    localStorage.setItem('token', frags.get('access_token'));
  }
  
}
