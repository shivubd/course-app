import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-directives',
  templateUrl: './learn-directives.component.html',
  styleUrls: ['./learn-directives.component.css']
})
export class LearnDirectivesComponent {
  label: string | undefined;
  show: boolean = false;
  setLabel(event: Event) {
    this.label = (<HTMLInputElement>event.target).value
    if(!this.label.length){
      this.show = false;
    }
  }
  showLabel() {
    if(this.label?.length != 0) {
      this.show = true;
    }
  }
}
