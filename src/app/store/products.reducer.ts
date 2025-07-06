import { createReducer } from "@ngrx/store"
import { IItemProduct } from "../shared/components/ui/item-product/model/iitem-product"

const initialState :IItemProduct[]= [



]

export const productsReducer = createReducer(initialState )
