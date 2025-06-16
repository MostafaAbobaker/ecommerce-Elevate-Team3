import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const generalInterceptor: HttpInterceptorFn = (req, next) => {
  // Call Environment base URL
  const baseUrl: string = environment.apiUrl;

  if(req.url.includes('/i18n/')){
    return next(req);
  }

  // Inject base URL In Request
  const modifiedReq: HttpRequest <unknown> = req.clone({
    url: `${baseUrl}${req.url}`,
    /** *
      setHeaders:{
        // Set the language header from localStorage or default to 'en'
        // language: localStorage.getItem('lng') || 'en',
      }
    * **/
  });
  return next(modifiedReq);
};
