export interface IResponseAddress {
  message: string
  addresses: IAddress[]
}

export interface IAddress {
  street: string
  phone: string
  city: string
  lat: string
  long: string
  username: string
  _id: string
}