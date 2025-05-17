import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const generalInterceptor: HttpInterceptorFn = (req, next) => {
  // Call Environment base URL
  const baseUrl = environment.apiUrl;


  let modifiedReq: HttpRequest<unknown>;

  // Inject base URL In Request
  modifiedReq = req.clone({
    url: `${baseUrl}${req.url}`
  });
  return next(modifiedReq);
};
