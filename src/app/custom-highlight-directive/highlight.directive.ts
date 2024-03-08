import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private element: ElementRef) { }
  //Here element is of ElementRef type that points to the element where this custom directive is used. (this is similar to @ViewChild())
  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
    this.element.nativeElement.style.color = 'red';
  }
}
