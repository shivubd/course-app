import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({ //Decorator for defining a module
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent //we should declare the components which will be used by app.component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] //main.ts file platformBrowserDynamic().bootstrapModule(AppModule) points here
})
export class AppModule { }
