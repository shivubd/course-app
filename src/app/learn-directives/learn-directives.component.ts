import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-directives',
  templateUrl: './learn-directives.component.html',
  styleUrls: ['./learn-directives.component.css']
})
export class LearnDirectivesComponent {
  label: string = '';
  show: boolean = false;
  num: number = 0;
  labels: string[] = [];
  setLabel(event: Event) {
    this.label = (<HTMLInputElement>event.target).value
    if(!this.label.length){
      this.show = false;
    }
  }
  showLabel() {
    if(this.label?.length != 0) {
      this.show = true;
      this.labels.push(this.label);
    }
    this.num = Math.round(Math.random()*1000);
  }
  getColor() {
    return this.num % 2 === 0?'green':'red';
  }
  getClass() {
    return this.num % 2 === 0?'greenClass':'redClass';
  }
}
