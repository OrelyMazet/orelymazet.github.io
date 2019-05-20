import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MonSpotifyService } from "../mon-spotify.service";
import { ListPlaylistService }from "../listplaylist.service";

@Component({
  selector: "app-user-authorization",
  templateUrl: "./user-authorization.component.html",
  styleUrls: ["./user-authorization.component.css"],
  providers: [MonSpotifyService, ListPlaylistService]
})
export class UserAuthorizationComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private monSpotifyService: MonSpotifyService,
    private playlistService: ListPlaylistService,
  ) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragments => {
      let res = new URLSearchParams(fragments);
      this.monSpotifyService.saveToken(res);
    });
  }
}
