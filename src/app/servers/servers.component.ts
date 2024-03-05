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
  serverCreationStatus: string = 'No server was created';
  serverCount: number = 0;
  isDisabled: boolean = true;
  serverName: string = 'Default value';
  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 2000);
  }
  onCreateServer() {
    this.serverCount += 1;
    this.serverCreationStatus = `Server ${this.serverCount} was sucessfully created`;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    //event.target is a HTMLInputElement type, and has a value.
  }
}
