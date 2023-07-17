"use client";

import { IProduct } from "@/app/types/product";
import Button from "../atoms/Button";
import { useState } from "react";
import Modal from "./Modal";
import ProductAddForm from "./ProductAddForm";
import { deleteProducts } from "@/app/lib/api/product";
import { useRouter } from "next/navigation";

interface IProps {
  products: IProduct[];
}

export default function ProductView({ products }: IProps) {
  const router = useRouter();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [checkList, setCheckList] = useState<string[]>([]);

  const handleAddProduct = () => {
    setIsOpenModal(true);
  };

  const handleDeleteProduct = async (e: any) => {
    await deleteProducts(checkList);
    router.refresh();
  };

  const toggleCheckList = (e: any) => {
    const id = e.target.value;
    if (checkList.includes(id)) {
      setCheckList((prev) => prev.filter((item) => item !== id));
    } else {
      setCheckList((prev) => [...prev, id]);
    }
  };

  return (
    <div className="p-5 overflow-x-hidden h-80">
      <h2 className="text-lg font-bold">상품 관리</h2>
      <div className="flex mt-5 gap-3">
        <Button rounded="full" onClick={handleAddProduct}>
          상품 추가
        </Button>
        <Button rounded="full" onClick={handleDeleteProduct}>
          상품 삭제
        </Button>
      </div>
      <div className="py-5 flex flex-col gap-2">
        {products.map((data) => (
          <div
            key={data._id}
            className="bg-slate-400 p-2 grid grid-cols-7 text-sm items-center text-center"
          >
            <input type="checkbox" className="w-5 h-5" value={data._id} onClick={toggleCheckList} />
            <img src={data.thumbnail} alt={data.title} />
            <strong>{data.title}</strong>
            <strong>{data.price}원</strong>
            <strong>{data.count}</strong>
            <strong>{data.deliveryFee}원</strong>
            <div>
              {data.type.map((data) => (
                <span key={data}>{data}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {isOpenModal && (
        <Modal setClose={setIsOpenModal}>
          <ProductAddForm />
        </Modal>
      )}
    </div>
  );
}
