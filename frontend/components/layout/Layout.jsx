import * as LS from "./Styled.jsx";
import Header from "./Header.jsx";

export default function Layout({ children }) {
  return (
    <LS.LayoutWrapper>
      <Header />
      <LS.LayoutContent>{children}</LS.LayoutContent>
    </LS.LayoutWrapper>
  );
}
