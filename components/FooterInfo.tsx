export default function FooterInfo() {
  return (
    <dl className="grid grid-cols-2 mt-5 text-white gap-3">
      <dt className="font-bold">상호명</dt>
      <dd>{process.env.NEXT_PUBLIC_NAME}</dd>
      <dt className="font-bold">대표자</dt>
      <dd>{process.env.NEXT_PUBLIC_OWNER}</dd>
      <dt className="font-bold">사업자등록번호</dt>
      <dd>{process.env.NEXT_PUBLIC_COMPANY_NUMBER}</dd>
      <dt className="font-bold">통신판매업신고</dt>
      <dd>{process.env.NEXT_PUBLIC_MAIL_ORDER_CODE}</dd>
      <dt className="font-bold">개인정보보호책임자</dt>
      <dd>{process.env.NEXT_PUBLIC_INFORMATION_PROTECTION_OFFICER}</dd>
      <dt className="font-bold">전화</dt>
      <dd>{process.env.NEXT_PUBLIC_PHONE}</dd>
      <dt className="font-bold">주소</dt>
      <dd>{process.env.NEXT_PUBLIC_ADDRESS}</dd>
    </dl>
  );
}
