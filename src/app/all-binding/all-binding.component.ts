import { Component } from '@angular/core';

@Component({
  selector: 'app-all-binding',
  templateUrl: './all-binding.component.html',
  styleUrls: ['./all-binding.component.css']
})
export class AllBindingComponent {
  shapeName: string = 'circle';
  shapes: string[] = [];
  charactersLength: number | undefined;
  constructor() {
    this.charactersLength = this.shapeName.length;
  }
  createShape() {
    this.shapes.push(this.shapeName);
    this.shapeName = '';
    this.charactersLength = 0;
  }
  charLength(event: Event) {
    this.charactersLength = (<HTMLInputElement>event.target).value.length
  }
}
