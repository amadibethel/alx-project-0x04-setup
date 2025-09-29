import { LayoutProps } from "@/interface";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-24 px-4 min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
