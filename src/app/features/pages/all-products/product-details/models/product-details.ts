export interface IResponseProductDetails {
  message: string
  product: IProductDetails
}

export interface IProductDetails {
  rateAvg: number
  rateCount: number
  _id: string
  title: string
  slug: string
  description: string
  imgCover: string
  images: string[]
  price: number
  priceAfterDiscount: number
  quantity: number
  category: string
  occasion: string
  createdAt: string
  updatedAt: string
  __v: number
  isSuperAdmin: boolean
  sold: number
  reviews: any[]
  id: string
}
