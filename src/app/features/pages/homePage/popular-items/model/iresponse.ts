import { IItemProduct } from "../../../../../shared/components/ui/item-product/model/iitem-product"

export interface IResponse {
   message: string
  metadata: Metadata
  products: IItemProduct[]
}

interface Metadata {
  currentPage: number
  totalPages: number
  limit: number
  totalItems: number
}

