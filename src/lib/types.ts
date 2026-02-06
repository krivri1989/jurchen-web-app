export interface HeroSlide {
  image: string;
  url?: string;
}

export interface Category {
  name: string;
  image: string;
}

export interface SubCategory {
  name: string;
  image: string;
}

export interface SubSubCategory {
  name: string;
  image: string;
  isFeatured?: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  specifications: string;
  termsAndConditions: string;
  product_image: string;
  product_gallery: string[];
  sale_price: number;
  mrp: number;
  gst: number;
  category: string;
  subCategory: string;
  subSubCategory: string;
  status: string;
  brochureUrl?: string;
  model3dUrl?: string;
}
