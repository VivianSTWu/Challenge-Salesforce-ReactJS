import ClickerColector from "../../assets/ClickRegister/NavigationTracker";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import { LayoutWrapperElement } from "./Layout.style";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {/* <ClickerColector> */}
        <LayoutWrapperElement>{children}</LayoutWrapperElement>
      {/* </ClickerColector> */}
      <Footer />
    </>
  );
};
