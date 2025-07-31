// This file defines an API token Representing the base URL for API calls
// if you don't have an environment file, you can use a static URL or a different configuration method.

/**
  import {InjectionToken} from '@angular/core';
  import {environment} from '../../../../../src/environments/environment';

  // Base URL for all API calls, provided as an injectable token.
  // This allows easy replacement or configuration of the API endpoint.
  export const API_BASE_URL = new InjectionToken <string>('API_BASE_URL', {
    providedIn: "root",
    factory: (): string => environment.apiUrl,
  });
*/
