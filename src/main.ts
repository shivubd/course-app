import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

setTimeout(() =>
  platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err))
,1000);
//bootstrapModule() method is called after 3000ms, due to which the cli doesnt know
//what is <app-root> in index.html, hence it print Loading, after 3000ms 
  /* bootstrapModule(AppModule)->app.module.ts->app.component.ts->selector->index.html <app-root> = app.component.html
      and like this <app-rot> is replaced with app.component.html */