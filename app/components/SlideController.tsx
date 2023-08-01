"use client";

import { MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./atoms/Button";
import Modal from "./molecule/Modal";
import MainBannerForm from "./MainBannerForm";
import { createBanner, updateBanner } from "../lib/api/banner";

export default function SlideController({ images = [] }: { images: string[] }) {
  const router = useRouter();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [imageList, setImageList] = useState<string[]>(images);

  const handleUploadImage = () => {
    setIsOpenModal(true);
  };

  const handleDeleteImage = async (e: MouseEvent<HTMLImageElement>) => {
    const result = confirm("정말 삭제하시겠습니까?");

    if (result) {
      const banner = await updateBanner({
        title: "mainBanner",
        imgUrl: imageList.filter((src) => src !== (e.target as HTMLImageElement).src),
      });

      setImageList(banner.imgUrl);
    }
  };

  const handleApply = async () => {
    const newBanner = await createBanner({
      title: "mainBanner",
      imgUrl: imageList,
    });

    if (newBanner) router.refresh();
  };

  return (
    <div className="p-5 overflow-x-hidden h-80">
      <h2 className="text-lg font-bold">메인 배너 관리</h2>
      <div className="flex mt-5 gap-3">
        <Button rounded="full" onClick={handleUploadImage}>
          이미지 추가
        </Button>
        <Button rounded="full" onClick={handleApply}>
          배너 적용
        </Button>
      </div>
      <div className="py-5 flex gap-2 w-full overflow-auto">
        {imageList.map((src, i) => (
          <img key={i} src={src} alt={`${i}번 배너`} className="w-28" onClick={handleDeleteImage} />
        ))}
      </div>
      {isOpenModal && (
        <Modal setClose={setIsOpenModal}>
          <MainBannerForm setImageList={setImageList} />
        </Modal>
      )}
    </div>
  );
}
