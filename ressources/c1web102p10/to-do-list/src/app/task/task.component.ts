import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  title:string;
  status:boolean;
  @Input() nameTask:string;

  addTask(editUser:string)
  {
    console.log(editUser);
    if (editUser) {
      this.nameTask=editUser;
    }
}

  constructor() {
    this.title='';
    this.status=true;

}

  ngOnInit() {
  }

}
