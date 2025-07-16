
export abstract class AdapterAbstract {
  // Authentication API response adapter
  abstract AdaptResponse(data: any): any;
  abstract AdaptError(data: any): any;
  abstract AdaptForgetPasswordResponse(data: any): any;
  abstract AdaptVerifyResponse(data: any): any;
}
