import * as LS from "./Styled.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import localFont from "next/font/local";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});
export default function Layout({ children }) {
  const router = useRouter();
  const [footerNav, setFooterNav] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url === "/") {
        setFooterNav(false);
        return;
      }
      const path = url.split("/");
      setFooterNav(path.length <= 2); // URL의 경로 길이에 따라 Footer 상태 설정
    };

    // 경로 변경 이벤트 감지
    router.events.on("routeChangeStart", handleRouteChange);

    // 현재 경로 초기 상태 반영
    handleRouteChange(router.pathname);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events, router.pathname]);

  return (
    <LS.LayoutWrapper className={pretendard.className}>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route} // 경로를 key로 사용하여 페이지 전환 시 애니메이션 적용
          initial={{ opacity: 0.2 }} // 페이지가 처음 나타날 때의 상태
          animate={{ opacity: 1 }} // 페이지가 나타날 때의 상태
          exit={{ opacity: 0.2 }} // 페이지가 사라질 때의 상태
          transition={{ duration: 0.5 }} // 애니메이션 지속 시간 설정
        >
          <LS.LayoutContent>{children}</LS.LayoutContent>
        </motion.div>
      </AnimatePresence>
      {footerNav && <Footer />}
    </LS.LayoutWrapper>
  );
}
