import * as HS from "./Styled.jsx";
import profile1 from "../common/image/profile1.png";
import profile2 from "../common/image/profile2.png";
import profile3 from "../common/image/profile3.png";
import profile4 from "../common/image/profile4.png";
import { API } from "@/pages/api.jsx";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Header({ path }) {
  const [user, setUser] = useState({});
  const router = useRouter();

  const fetchUser = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await API.get("/profile/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setUser(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleProfileClick = () => {
    router.push("/sign/userInfo"); 
  };

  const getProfileImage = (profileImage) => {
    switch (profileImage) {
      case "image1":
        return profile1;
      case "image2":
        return profile2;
      case "image3":
        return profile3;
      case "image4":
        return profile4;
    }
  };

  return (
    <HS.HeaderContainer>
      <HS.HeaderPath>{path}</HS.HeaderPath>
        <HS.HeaderMypage
          src={getProfileImage(user.profileImage)}
          alt="profile_image"
          onClick={handleProfileClick}
        />
    </HS.HeaderContainer>
  );
}