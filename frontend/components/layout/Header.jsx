import { useState, useEffect, useCallback } from "react";
import * as HS from "./Styled.jsx";
import profile1 from "../common/image/profile1.png";
import profile2 from "../common/image/profile2.png";
import profile3 from "../common/image/profile3.png";
import profile4 from "../common/image/profile4.png";
import { API } from "@/pages/api.jsx";
import { useRouter } from "next/router";

export default function Header({ path }) {
  const [user, setUser] = useState({});
  const router = useRouter();

  const fetchUser = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("No token found");
      return;
    }
    try {
      const response = await API.get("/profile/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setUser(response.data);
    } catch (e) {
      console.log("Error fetching user data:", e);
    }
  }, [router]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

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
      default:
        return profile1;
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
