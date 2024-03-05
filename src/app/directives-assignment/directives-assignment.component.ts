import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-assignment',
  templateUrl: './directives-assignment.component.html',
  styleUrls: ['./directives-assignment.component.css']
})
export class DirectivesAssignmentComponent {
  isEnabled: boolean = true;
  clicks: string[] = [];
  buttonClick() {
    this.isEnabled = !this.isEnabled;
    this.clicks.push(new Date().toString());
  }
}
