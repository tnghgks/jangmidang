export interface IProduct {
  _id: string;
  title: string;
  price: number | string;
  count: string;
  deliveryFee: number;
  options: string[];
  thumbnail: string;
  description: string;
  type: string[];
}
