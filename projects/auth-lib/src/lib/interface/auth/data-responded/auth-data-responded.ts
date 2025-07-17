// Data Model: It Represents The Response From the API
// (Sign_In / Sign_Up) After Success Authentication and Adapting The Data Model
// Use it in Sign In / Sign Up / Reset Password

export interface AuthDataResponded {
  message: string
  token: string
}
