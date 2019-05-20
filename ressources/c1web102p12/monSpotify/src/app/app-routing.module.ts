import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserAuthorizationComponent} from './user-authorization/user-authorization.component';
import {PlayListComponent} from './play-list/play-list.component';
import { PlaylistTracksComponent } from './playlist-tracks/playlist-tracks.component';

const routes: Routes = [
  {path:'', redirectTo:'/',pathMatch:'full'},
  {path:'login',component:UserAuthorizationComponent},
  {path:'playlist', component:PlayListComponent},
  {path:'items/:id', component:PlaylistTracksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
