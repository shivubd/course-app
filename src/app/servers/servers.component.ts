import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  // selector: '[app-servers]' //-> can be called by <div app-servers></div>
  // selector: '.app-servers' //-> can be called by <div class="app-servers"></div>
  //selector: 'app-servers' -> can be called by <app-servers></app-servers>

  // template:`     we can define templates like this, if the template required is small, inline html
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,


  // styles: [   we can give styling here also
  //   `
  //   * {
  //     color: Blue;
  //   }
  //   `
  // ]
})
export class ServersComponent {

}
