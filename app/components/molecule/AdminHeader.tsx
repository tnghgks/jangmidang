import Link from "next/link";
import Button from "../atoms/Button";

export default function AdminHeader() {
  return (
    <div className="h-10 mt-5">
      <ul className="h-10 flex gap-3 justify-start px-5">
        <li>
          <Button size="md" rounded="top" variant="blue" color="white">
            <Link href="/adminPage/product">상품 관리</Link>
          </Button>
        </li>
        <li>
          <Button size="md" rounded="top" variant="blue" color="white">
            <Link href="/adminPage/order">주문 관리</Link>
          </Button>
        </li>
        <li>
          <Button size="md" rounded="top" variant="blue" color="white">
            <Link href="/adminPage/member"> 아이디 관리</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}
