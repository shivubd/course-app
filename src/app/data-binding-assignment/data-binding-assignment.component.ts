import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-assignment',
  templateUrl: './data-binding-assignment.component.html',
  styleUrls: ['./data-binding-assignment.component.css']
})
export class DataBindingAssignmentComponent {
  username: string = '';
  clearUsername() {
    this.username = '';
  }
}
