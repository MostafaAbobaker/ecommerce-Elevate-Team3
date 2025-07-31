// Authentication Endpoints
export enum AuthApiEndpoint {
  SIGN_IN = 'auth/signin',
  SIGN_UP = 'auth/signup',
  FORGET_PASSWORD = 'auth/forgotPassword',
  VERIFY_RESET_CODE = 'auth/verifyResetCode',
  RESET_PASSWORD = 'auth/resetPassword',
  /*CHANGE_PASSWORD = 'auth/change-password',
  UPLOAD_PROFILE_PHOTO = 'auth/upload-photo',
  GET_LOGGED_USER_DATA = 'auth/profile-data',
  LOGOUT = 'auth/logout',


  DELETE_ACCOUNT = 'auth/deleteMe',
  EDIT_PROFILE = 'auth/editProfile',
  CHANGE_USER_ROLE = 'auth/update-role/', // NOTE: This endpoint requires a user ID after the slash*/
}
