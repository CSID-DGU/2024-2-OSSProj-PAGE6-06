import * as HS from "./Styled.jsx";
import profile_image from "../common/image/profile_image1.png";

export default function Header({ path }) {
  return (
    <HS.HeaderContainer>
      <HS.HeaderPath>{path}</HS.HeaderPath>
      <HS.HeaderMypage src={profile_image} alt="profile_image" />
    </HS.HeaderContainer>
  );
}
