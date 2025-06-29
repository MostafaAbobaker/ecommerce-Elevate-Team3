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

export interface TestIFilterObj {
  textSearch?: string,
  Categories?: string[],
  occasions?: string[],
  priceRange?: number[],
  rating?: string[],
}
