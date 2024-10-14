import * as LS from "./Styled.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const router = useRouter();
  const [footerNav, setFooterNav] = useState(false);

  useEffect(() => {
    const path = router.pathname.split("/");
    console.log(path);
    console.log(path.length <= 2);
    if (path.length <= 2) {
      setFooterNav(true);
    }
  }, [router.pathname, router.isReady]);

  return (
    <LS.LayoutWrapper>
      <Header />
      <LS.LayoutContent>{children}</LS.LayoutContent>
      {footerNav && <Footer />}
    </LS.LayoutWrapper>
  );
}
