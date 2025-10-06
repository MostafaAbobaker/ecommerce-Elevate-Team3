import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const generalInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID);
  const isBrowser = isPlatformBrowser(platformId);

  // تخطي طلبات الترجمة
  if (req.url.includes('/i18n/')) {
    return next(req);
  }
  const baseUrl: string = environment.apiUrl;
  let headers: Record<string, string> = {};

  if (isBrowser) {
    const token = localStorage.getItem('Rose_token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const language = localStorage.getItem('lng') || 'en';
    headers['language'] = language;
  }

  const modifiedReq: HttpRequest<unknown> = req.clone({
    url: `${baseUrl}${req.url}`,
    setHeaders: headers
  });

  return next(modifiedReq);

};
