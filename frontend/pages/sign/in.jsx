import * as SS from "../../components/_styled/signStyled";
import Title from "@/components/sign/Title";
import SigninInput from "@/components/sign/SigninInput";

export default function SignIn() {
  return (
    <SS.SignInContainer>
        <SS.SignInContentContainer>
          <Title />
          <SigninInput />
        </SS.SignInContentContainer>
    </SS.SignInContainer>
  );
}
