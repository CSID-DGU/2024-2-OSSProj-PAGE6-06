import * as SS from "../../components/_styled/signStyled.jsx";
import Title from "@/components/sign/Title";
import SignupInput from "@/components/sign/SignupInput";

export default function Signup() {
  
  return (
    <SS.SignContainer>
      <SS.SignContentContainer>
        <Title />
        <SignupInput />
      </SS.SignContentContainer>
    </SS.SignContainer>
  );
}
