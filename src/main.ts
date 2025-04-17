import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { routes } from './app/app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular({ navAnimation: undefined }),
    provideRouter(routes, withPreloading(PreloadAllModules)), // <-- ativa preload de lazy components
    provideIonicAngular(), // isso injeta os providers do Ionic no standalone
    provideHttpClient()
  ],
}).catch((err) => console.error(err));
