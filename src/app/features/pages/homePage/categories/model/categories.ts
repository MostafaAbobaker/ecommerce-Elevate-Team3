export interface Categories {
  _id: string,
  name: string,
  slug: string,
  image: string,
  createdAt: string,
  updatedAt: string,
  productsCount: number,
  // Category Filter Properties
  checked?: boolean, // Optional property to track if the category is selected
  unChecked?: boolean; // Optional property to track if the category is not selected
}
