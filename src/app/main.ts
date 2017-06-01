import '../polyfills'; //should be loaded first for getting the es6, es7 and zone features

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);