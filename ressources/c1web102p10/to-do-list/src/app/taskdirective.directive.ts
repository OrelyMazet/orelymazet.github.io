import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTaskdirective]'
})
export class TaskdirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) {}

}
