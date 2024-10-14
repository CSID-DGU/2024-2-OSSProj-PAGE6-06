import * as LS from "./Styled.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ children }) {
  return (
    <LS.LayoutWrapper>
      <Header />
      <LS.LayoutContent>{children}</LS.LayoutContent>
      <Footer />
    </LS.LayoutWrapper>
  );
}
