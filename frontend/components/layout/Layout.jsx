import * as LS from "./Styled.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import localFont from 'next/font/local';

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard"
});
export default function Layout({ children }) {
  const router = useRouter();
  const [footerNav, setFooterNav] = useState(false);

  useEffect(() => {
    const path = router.pathname.split("/");
    if (path.length <= 2) {
      setFooterNav(true);
    }
  }, [router.pathname, router.isReady]);

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
