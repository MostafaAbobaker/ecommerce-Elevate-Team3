export interface IFilterObj {
  textSearch?: string,
  Categories?: string[],
  occasions?: string[],
  priceRange?: {
    min: string,
    max: string
  },
  rating?: string[],
}
