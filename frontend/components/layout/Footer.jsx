import {
  faBookBookmark,
  faChartSimple,
  faHome,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import * as HS from "./Styled.jsx";
import { useState } from "react";
import { useRouter } from "next/router.js";

export default function Footer() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(router.pathname.split("/")[1]);
  const handlePageChange = (data) => {
    setCurrentPage(data);
    router.push(`/${data}`);
  };
  return (
    <HS.FooterContainer>
      <HS.FooterButton
        icon={faClockFour}
        onClick={() => handlePageChange("routine")}
        $isActive={currentPage === "routine"}
      />
      <HS.FooterButton
        icon={faBookBookmark}
        onClick={() => handlePageChange("library")}
        $isActive={currentPage === "library"}
      />
      <HS.FooterButton
        icon={faHome}
        onClick={() => handlePageChange("main")}
        $isActive={currentPage === "main"}
      />
      <HS.FooterButton
        icon={faChartSimple}
        onClick={() => handlePageChange("record")}
        $isActive={currentPage === "record"}
      />
      <HS.FooterButton
        icon={faUserGroup}
        onClick={() => handlePageChange("club")}
        $isActive={currentPage === "club"}
      />
    </HS.FooterContainer>
  );
}
