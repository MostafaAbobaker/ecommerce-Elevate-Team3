import { IMetadata } from "../imetadata"
import { IOccasions } from "./ioccasions"

export interface IResponse {
  message: string
  metadata: IMetadata
  occasions: IOccasions[]
}
