import "@/app/globals.css";

export const metadata = {
  title: "관리자 페이지 | 전통 디저트",
  description: "",
  robots: "noindex, nofollow",
  viewport: "width=device-width, initial-scale=1",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
