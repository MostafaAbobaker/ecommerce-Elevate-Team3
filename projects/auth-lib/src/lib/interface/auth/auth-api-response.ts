// Data Model: It Represents The Response From the API

export interface Auth_Api_Response {
  message: string
  token: string
  user: {
    _id: string
    firstName: string
    lastName: string
    email: string
    gender: string
    phone: string
    photo: string
    role: string
    wishlist: string[]
    addresses: string[]
    createdAt: string
  }
}
