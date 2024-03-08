import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { AllBindingComponent } from './all-binding/all-binding.component';
import { DataBindingAssignmentComponent } from './data-binding-assignment/data-binding-assignment.component';
import { LearnDirectivesComponent } from './learn-directives/learn-directives.component';
import { DirectivesAssignmentComponent } from './directives-assignment/directives-assignment.component';
import { HighlightDirective } from './custom-highlight-directive/highlight.directive';
import { RenderHighlightDirective } from './cutom-better-highlight-directive/render-highlight.directive';
import { ReverseIfDirective } from './custom-reverse-if-directive/reverse-if.directive';

@NgModule({ //Decorator for defining a module
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AllBindingComponent,
    DataBindingAssignmentComponent,
    LearnDirectivesComponent,
    DirectivesAssignmentComponent,
    HighlightDirective,
    RenderHighlightDirective,
    ReverseIfDirective //we should declare the components which will be used by app.component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //main.ts file platformBrowserDynamic().bootstrapModule(AppModule) points here
})
export class AppModule { }
