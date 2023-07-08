import { axiosInstance } from "./client";

export const createProducts = async (productData: any) => {
  const { data } = await axiosInstance.post("/api/products", productData);

  if (data) alert("정상적으로 생성되었습니다.");

  return data;
};
