'use client'

import { Dispatch, SetStateAction, SyntheticEvent, useContext, useRef, useState } from "react";
import Button from "./atoms/Button";
import { ModalContext } from "./molecule/Modal";
import AwsS3 from "../lib/api/awsSdk";

interface IProps{
    setImageList: Dispatch<SetStateAction<string[]>>;
}

export default function MainBannerForm({setImageList}:IProps) {
    const [imgSrc, setImgSrc] = useState("");
    const [imgFile, setImgFile] = useState<File>();
    const imgRef = useRef<HTMLInputElement>(null);
    const onClose = useContext(ModalContext);
  
    const handleSubmit = async (e: SyntheticEvent) => {
      e.preventDefault();

      if (!imgFile) return alert("이미지를 등록해 주세요.");

      const awsS3 = new AwsS3()
      const thumbnailURL = await awsS3.upload(imgFile, imgFile.name);
  
      if (thumbnailURL) {
        setImageList((prev)=>[...prev,thumbnailURL])
        onClose()
    };
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