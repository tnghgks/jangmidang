export interface IProduct {
  _id: string;
  title: string;
  price: number | string;
  count: string;
  deliveryFee: string;
  options: string;
  thumbnail: string;
  description: string;
  type: string[];
  detail: IProductData;
  detailImgs: string[];
}

export interface IProductData {
  type: string;
  producer: string;
  expirationDate: string;
  countByPackaging: string;
  materials: string;
  nutrient: string;
  title: string;
  _id: string;
}
