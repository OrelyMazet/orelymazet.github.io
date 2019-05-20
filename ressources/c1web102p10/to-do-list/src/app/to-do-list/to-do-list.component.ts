import {Component, OnInit, ViewChild,ComponentFactoryResolver} from '@angular/core';
import { TaskdirectiveDirective } from '../taskdirective.directive';
import { TaskComponent } from '../task/task.component';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  title:string;
  nameTask:Array<string>;
  @ViewChild(TaskdirectiveDirective) appTaskdirective: TaskdirectiveDirective;


  editTitle(editUser:string)
  {
    if (editUser) {
      this.title=editUser;
    }
}

  constructor(private componentFactoryResolver:ComponentFactoryResolver) { 
  this.nameTask=[];
  this.title='toDo';
  }

  ngOnInit() {
    
  }
  AddTask(oufnewtask){
    let componentFactory=this.componentFactoryResolver.resolveComponentFactory(TaskComponent);
    let viewContainerRef =this.appTaskdirective.viewContainerRef;
    let componentRef= viewContainerRef.createComponent(componentFactory);
    (<TaskComponent>componentRef.instance).status=false;
    (<TaskComponent>componentRef.instance).title=oufnewtask;
  }

}
