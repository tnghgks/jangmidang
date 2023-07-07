import { axiosInstance } from "./client";

export const createProducts = async (productData: any) => {
  const { data } = await axiosInstance.post("/api/products", productData);

  return data;
};
