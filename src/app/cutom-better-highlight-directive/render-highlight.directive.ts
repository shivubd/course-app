import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderHighlight]'
})
export class RenderHighlightDirective {
  @HostBinding('style.color') color: string = 'white';
  //Above we are using @HostBinding('DOM property') to directly access the property of the DOM element, alternate for Rendere

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  //Here we use Renderer2 instance to set the style using setStyle method, this is best practice
  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
  }

  //@HostListener() decorator is used to run a method when a particular event occurs on the element, in this case it is 'mouseenter' which is passed to decorator
  @HostListener('mouseenter') 
  onEnter(){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
    this.color = 'black';
  }

  // in this case it is 'mouseleave' which is passed to decorator
  @HostListener('mouseleave')
  onLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'aqua');
    this.color = 'blue';
    //Here we are using binded properties to set values

    //WE CAN SET VALUES TO A PROPERTY USING EITHER OF RENDERER OR HOSTBINDING, WE CAN USE BOTH AT THE SAME TIME
  }
}
