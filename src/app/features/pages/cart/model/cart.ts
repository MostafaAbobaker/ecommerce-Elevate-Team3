
export interface resGetLoggedUserCart {
  message: string;
  numOfCartItems: number;
  cart: {
    _id: string;
    user: string;
    cartItems: {
      product: {
        rateAvg: number;
        rateCount: number;
        _id: string;
        title: string;
        slug: string;
        description: string;
        imgCover: string;
        images: string[];
        price: number;
        priceAfterDiscount: number;
        quantity: number;
        category: string;
        occasion: string;
        createdAt: string; // ISO Date
        updatedAt: string; // ISO Date
        __v: number;
        isSuperAdmin: boolean;
        sold: number;
        id: string;
      };
      price: number;
      quantity: number;
      _id: string;
    }[];
    appliedCoupons: any[];
    totalPrice: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}
