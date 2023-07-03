import Input from "../atoms/Input";

export default function ProductForm() {
  return (
    <form className="flex flex-col gap-2">
      <Input type="file" scale="md" shadow="md" placeholder="사진" />
      <Input scale="md" shadow="md" placeholder="상품 이름" />
      <Input scale="md" shadow="md" placeholder="가격 " />
      <Input scale="md" shadow="md" placeholder="수량" />
      <Input scale="md" shadow="md" placeholder="배송비 " />
      <Input scale="md" shadow="md" placeholder="옵션 " />
      <Input scale="md" shadow="md" placeholder="타입 " />
      <Input scale="md" shadow="md" placeholder="소개 " />
    </form>
  );
}
