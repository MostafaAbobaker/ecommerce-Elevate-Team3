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

export interface IResponseRelatedProduct {
  message: string
  count: number
  relatedProducts: IRelatedProduct[]
}

export interface IRelatedProduct {
  rateAvg: number
  rateCount: number
  _id: string
  title: string
  imgCover: string
  price: number
  priceAfterDiscount: number
  id: string
}

export interface IResponseReview {
  message: string
  reviews: IReviewProduct
}

export interface IReviewProduct {
  product: string
  user: string
  rating: number
  title: string
  comment: string
  status: string
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
}
