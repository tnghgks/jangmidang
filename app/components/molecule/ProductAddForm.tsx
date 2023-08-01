"use client";

import { SyntheticEvent, useContext, useRef, useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { createProducts } from "@/app/lib/api/product";
import { IProduct } from "@/app/types/product";
import { ModalContext } from "./Modal";
import { useRouter } from "next/navigation";
import AwsS3 from "@/app/lib/api/awsSdk";

type ProductKey = keyof IProduct;

export default function ProductAddForm() {
  const router = useRouter();
  const [imgSrc, setImgSrc] = useState("");
  const [imgFile, setImgFile] = useState<File>();
  const imgRef = useRef<HTMLInputElement>(null);
  const onClose = useContext(ModalContext);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const { title, price, count, deliveryFee, options, type, description } =
      e.target as typeof e.target & Record<ProductKey, HTMLInputElement>;

    if (!imgFile) return alert("이미지를 등록해 주세요.");
    const awsS3 = new AwsS3();
    const thumbnailURL = await awsS3.upload(imgFile, imgFile.name);

    if (!thumbnailURL) return;

    const product = await createProducts({
      title: title.value,
      price: price.value,
      count: count.value,
      deliveryFee: deliveryFee.value,
      options: options.value,
      thumbnail: thumbnailURL,
      type: [type.value],
      description: description.value,
    });

    if (product) onClose();
    router.refresh();
  };

  const handleUploadImg = () => {
    if (!imgRef.current || !imgRef.current.files) return;
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setImgSrc(reader.result);
        setImgFile(file);
      }
    };
  };

  return (
    <form className="flex flex-col gap-2 w-96 justify-center items-center" onSubmit={handleSubmit}>
      <label htmlFor="thumbnail" className="rounded-full shadow-md cursor-pointer p-3">
        상품 이미지 추가
      </label>
      <img
        src={imgSrc ? imgSrc : `/uploadImage.png`}
        alt="상품 업로드 이미지"
        className="w-full rounded-2xl"
      />
      <input
        id="thumbnail"
        name="thumbnail"
        type="file"
        placeholder="사진"
        accept="image/*"
        onChange={handleUploadImg}
        ref={imgRef}
        className="w-full hidden"
      />
      <Input name="title" scale="md" shadow="md" placeholder="상품 이름" className="w-full" />
      <Input name="price" scale="md" shadow="md" placeholder="가격 " className="w-full" />
      <Input name="count" scale="md" shadow="md" placeholder="수량" className="w-full" />
      <Input
        name="deliveryFee"
        type="number"
        scale="md"
        shadow="md"
        placeholder="배송비 "
        className="w-full"
      />
      <Input name="options" scale="md" shadow="md" placeholder="옵션 " className="w-full" />
      <Input name="type" scale="md" shadow="md" placeholder="타입 " className="w-full" />
      <Input name="description" scale="md" shadow="md" placeholder="소개 " className="w-full" />
      <Button
        type="submit"
        rounded="full"
        size="md"
        variant="blue"
        className="shadow-md mt-5"
        color="white"
      >
        추가
      </Button>
    </form>
  );
}
