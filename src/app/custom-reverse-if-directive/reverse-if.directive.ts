import { Directive, TemplateRef, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appReverseIf]'
})
export class ReverseIfDirective {
  //Here @Input() helps us to take the value sent with the structural directive
  //set is used to make this a method, and this runs whenever the value changes
  @Input() set appReverseIf(value: boolean) {
    if(!value) {
      this.viewContainer.createEmbeddedView(this.template);
    }
    else {
      this.viewContainer.clear();
    }
  }
  //here template is of type TemplateRef<> which is element where this structural directive is used
  //here viewContainer is of type ViewContainerRed which is element in which the templateref should be rendered.
  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

}
