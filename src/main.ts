import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './01-basic/app.module';
//import { AppModule } from './02-component/app.module';
//import { AppModule } from './03-child-component/app.module';
//import { AppModule } from './05-service/app.module';
//import { AppModule } from './06-service/app.module';
//import { AppModule } from './07-ajax/app.module';
//import { AppModule } from './08-directives-ajax/app.module';
//import { AppModule } from './09-directives/app.module';
//import { AppModule } from './10-directives-structral/app.module';
//import { AppModule } from './11-pipes/app.module';
//import { AppModule } from './12-forms/app.module';
//import { AppModule } from './13-forms/app.module';
import { AppModule } from './14-bootstrap/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
