import { Component } from '@angular/core';

@Component({  //app.module.ts bootstrap: [AppComponent] points here
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
}
