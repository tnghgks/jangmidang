import { IProduct } from "@/types/product";
import { Schema, models, model, Model } from "mongoose";

export const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  count: { type: String, required: true },
  deliveryFee: { type: Number, default: 0 },
  options: [String],
  thumbnail: String,
  type: [String],
  description: String,
});

const Products: Model<IProduct> = models?.Products || model("Products", ProductSchema);

export default Products;
