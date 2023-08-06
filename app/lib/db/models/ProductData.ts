import { IProductData } from "@/app/types/product";
import { Schema, models, model, Model } from "mongoose";

export const ProductDataSchema = new Schema({
  type: String,
  producer: String,
  expirationDate: String,
  countByPackaging: String,
  materials: String,
  nutrient: String,
});

const ProductData: Model<IProductData> =
  models?.ProductData || model("ProductData", ProductDataSchema);

export default ProductData;
