export default function FooterInfo() {
  return (
    <dl className="grid grid-cols-2 mt-5 text-white gap-1">
      <dt className="font-bold">상호명</dt>
      <dd>{process.env.NEXT_PUBLIC_Name}</dd>
      <dt className="font-bold">대표자</dt>
      <dd>{process.env.NEXT_PUBLIC_Owner}</dd>
      <dt className="font-bold">사업자등록번호</dt>
      <dd>{process.env.NEXT_PUBLIC_CompanyNumber}</dd>
      <dt className="font-bold">통신판매업신고</dt>
      <dd>{process.env.NEXT_PUBLIC_MailOrderCode}</dd>
      <dt className="font-bold">개인정보보호책임자</dt>
      <dd>{process.env.NEXT_PUBLIC_InformationProtectionOfficer}</dd>
      <dt className="font-bold">전화</dt>
      <dd>{process.env.NEXT_PUBLIC_Phone}</dd>
      <dt className="font-bold">주소</dt>
      <dd>{process.env.NEXT_PUBLIC_Address}</dd>
    </dl>
  );
}
