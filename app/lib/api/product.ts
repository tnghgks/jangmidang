import { axiosInstance } from "./client";

export const createProducts = async (productData: any) => {
  const { data } = await axiosInstance.post("/api/products", productData);

  if (data) alert("정상적으로 생성되었습니다.");

  return data;
};
export const deleteProducts = async (productsId: any) => {
  const ids = productsId.map((id: string) => `id=${id}`).join("&");

  const { data } = await axiosInstance.delete(`/api/products?${ids}`);

  if (data) alert("정상적으로 삭제되었습니다.");

  return data;
};
