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
