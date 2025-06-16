import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

export function HttpLoaderFactory(http:HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/','.json');
}

bootstrapApplication(AppComponent, appConfig)

  .catch((err) => console.error(err));
