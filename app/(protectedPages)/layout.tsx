import "@/app/globals.css";
import AdminHeader from "../components/molecule/AdminHeader";

export const metadata = {
  title: "관리자 페이지 | 전통 디저트",
  description: "",
  robots: "noindex, nofollow",
  viewport: "width=device-width, initial-scale=1",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[60%] mx-auto h-screen">
      <AdminHeader />
      <div className="bg-slate-300 mt-5">{children}</div>
    </div>
  );
}
