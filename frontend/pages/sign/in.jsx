import * as SS from "../../components/_styled/signStyled.jsx";
import Title from "@/components/sign/Title";
import SigninInput from "@/components/sign/SigninInput";

export default function Signin() {
  return (
    <SS.SignContainer>
        <SS.SigninContentContainer>
          <Title />
          <SigninInput />
        </SS.SigninContentContainer>
    </SS.SignContainer>
  );
}
