import { Categories } from "./categories"

export interface IResponse {
message: string,
metadata: {
  currentPage: number,
  limit: number,
  totalPages: number,
  totalItems: number
},
categories: Categories[]
}
