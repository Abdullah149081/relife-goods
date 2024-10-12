import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import { ReactNode } from "react";


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      
      <Footer />
    </>
  );
};

export default Layout;
