import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TaskdirectiveDirective } from './taskdirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ToDoListComponent,
    TaskdirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TaskComponent],
})
export class AppModule {
  constructor() {}
}
