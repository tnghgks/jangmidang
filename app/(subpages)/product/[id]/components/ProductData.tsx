import { IProductData } from "@/app/types/product";

interface IProps {
  productData: IProductData;
}

export default function ProductData({ productData }: IProps) {
  return (
    <dl className="w-full grid sm:grid-cols-2 gap-2 md:grid-cols-4 p-3 text-center items-center">
      <dt className="bg-slate-300 p-1">식품의 유형</dt>
      <dd className="p-1">{productData.type}</dd>
      <dt className="bg-slate-300 p-1">생산자 및 소재지</dt>
      <dd className="p-1">{productData.producer}</dd>
      <dt className="bg-slate-300 p-1">제조연월일, 유통기한 또는 품질유지기한</dt>
      <dd className="p-1">{productData.expirationDate}</dd>
      <dt className="bg-slate-300 p-1">포장단위별 용량(중량), 수량</dt>
      <dd className="p-1">{productData.countByPackaging}</dd>
      <dt className="bg-slate-300 p-1">원재료명 및 함량</dt>
      <dd className="p-1">{productData.materials}</dd>
      <dt className="bg-slate-300 p-1">영양성분</dt>
      <dd className="p-1">{productData.nutrient}</dd>
    </dl>
  );
}
