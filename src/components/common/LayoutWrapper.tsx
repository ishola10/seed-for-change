"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/common/Header";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();

  const hideHeaderRoutes = ["/join-waitlist", "/login", "/signup", "/dashboard"];

  const shouldHideHeader = hideHeaderRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <>
      {!shouldHideHeader && <Header />}
      {children}
    </>
  );
}
