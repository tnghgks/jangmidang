import { IBanner } from "@/app/types/banner";
import { axiosInstance } from "./client";

export const createBanner = async (bannerData: IBanner) => {
  const { data } = await axiosInstance.post("/api/banner", bannerData);

  if (data) alert("정상적으로 생성되었습니다.");

  return data;
};

export const getBanner = async (title: string) => {
  const { data } = await axiosInstance.get(`/api/banner/${title}`, );

  return data;
};

export const updateBanner = async (bannerData: IBanner) => {
  const { data } = await axiosInstance.put("/api/banner", bannerData);

  if (data) alert("정상적으로 수정되었습니다.");

  return data;
};