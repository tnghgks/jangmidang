import { IProduct } from "@/app/types/product";
import { axiosInstance } from "./client";

interface IProductFormData extends Omit<IProduct, "detail" | "_id"> {
  detail: string;
}

export const createProducts = async (productData: IProductFormData) => {
  const { data } = await axiosInstance.post("/api/products", productData);

  if (data) alert("정상적으로 생성되었습니다.");

  return data;
};
export const deleteProducts = async (productsId: string[]) => {
  const ids = productsId.map((id: string) => `id=${id}`).join("&");

  const { data } = await axiosInstance.delete(`/api/products?${ids}`);

  if (data) alert("정상적으로 삭제되었습니다.");

  return data;
};
export const getProductDetails = async () => {
  const { data } = await axiosInstance.get("/api/productDetails");

  return data;
};
