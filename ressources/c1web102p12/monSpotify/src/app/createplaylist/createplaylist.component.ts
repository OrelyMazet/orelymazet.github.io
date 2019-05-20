import { Component, OnInit } from '@angular/core';
import {NewplaylistService} from '../newplaylist.service';
import { FormControl} from '@angular/forms';


@Component({
  selector: 'app-createplaylist',
  templateUrl: './createplaylist.component.html',
  styleUrls: ['./createplaylist.component.css']
})
export class CreateplaylistComponent implements OnInit {
  Name = new FormControl();
  Description = new FormControl();
  Public = new FormControl();

  user_id:'';

  createPlaylist;
  laplaylist={
    name:'',//(stocker ma variable ici)
    description:'',
    public:true,
  }


  constructor(private newplaylistservice : NewplaylistService) {
    //this.name = '';
    //this.description = '';
    //this.public = true;
   }
   onclick(){
    this.newplaylistservice.CreatePlaylist(this.laplaylist)
    .subscribe(
      resPlaylist =>{
        this.createPlaylist=resPlaylist;
      }
    );
  }

  ngOnInit() {}
}
