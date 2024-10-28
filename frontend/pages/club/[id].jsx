import * as CS from "@/components/_styled/clubStyled";
import { useRouter } from "next/router";

export default function ClubDetail({ club }) {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  return <>detail</>;
}
