import { Component, OnInit } from '@angular/core';
import{TaskComponent}        from './TaskComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'toDoList!';
  TaskComponent = [];

  
}
