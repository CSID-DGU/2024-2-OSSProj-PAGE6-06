import Header from "@/components/layout/Header";
import * as MS from "../../components/_styled/mainStyled";
import * as LS from "../../components/_styled/libraryStyled";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";

export default function Library() {
  const router = useRouter();
  return (
    <MS.MainContainer>
      <Header path="My Library" />
      <LS.LibraryAdd>
        <LS.LibraryButtonBox
          onClick={() => {
            router.push(`/library/add`);
          }}
        >
          <LS.LibraryAddButton icon={faPlus} />
        </LS.LibraryButtonBox>
      </LS.LibraryAdd>
    </MS.MainContainer>
  );
}
