import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const generalInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl: string = environment.apiUrl;

  if (req.url.includes('/i18n/')) {
    return next(req);
  }

  let headers: Record<string, string> = {};

  if (typeof window !== 'undefined' && localStorage) {
    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

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
