import { Component } from '@angular/core';

@Component({ //Decorator that specifies some important info for component to exist
  selector: 'app-server', //html tag, to load this component
  templateUrl: './server.component.html', //the html present inside this file replaces the selector
  styleUrls: ['./server.component.css'] //styling files to style the template
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
}
