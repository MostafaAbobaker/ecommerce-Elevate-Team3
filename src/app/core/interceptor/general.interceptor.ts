import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const generalInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl: string = environment.apiUrl;

  // سيب الـ i18n requests زي ما هي
  if (req.url.includes('/i18n/')) {
    return next(req);
  }

  // default headers
  let headers: Record<string, string> = {};

  // Inject token بس لو احنا في المتصفح
  if (typeof window !== 'undefined' && localStorage) {
    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    // لو عايز كمان language header
    const lang: string = localStorage.getItem('lng') || 'en';
    headers['language'] = lang;
  }

  // Inject baseUrl + headers
  const modifiedReq: HttpRequest<unknown> = req.clone({
    url: `${baseUrl}${req.url}`,
    setHeaders: headers
  });

  return next(modifiedReq);
};
