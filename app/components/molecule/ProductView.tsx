"use client";

import { IProduct } from "@/app/types/product";
import Button from "../atoms/Button";
import { useState } from "react";
import Modal from "./Modal";
import ProductAddForm from "./ProductAddForm";

interface IProps {
  products: IProduct[];
}

export default function ProductView({ products }: IProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleAddProduct = () => {
    setIsOpenModal(true);
  };

  const handleDeleteProduct = () => {};

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
            <input type="checkbox" className="w-5 h-5" />
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
