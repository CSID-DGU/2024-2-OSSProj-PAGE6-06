import * as HS from "./Styled.jsx";
import profile1 from "../common/image/profile1.png";
import profile2 from "../common/image/profile2.png";
import profile3 from "../common/image/profile3.png";
import profile4 from "../common/image/profile4.png";
import { API } from "@/pages/api.jsx";
import { useEffect, useState } from "react";

export default function Header({ path }) {
  const [user, setUser] = useState({});

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

  return (
    <HS.HeaderContainer>
      <HS.HeaderPath>{path}</HS.HeaderPath>
      {user.image === "image1" ? (
        <HS.HeaderMypage src={profile1} alt="profile_image" />
      ) : (
        <>
          {user.image === "image2" ? (
            <HS.HeaderMypage src={profile2} alt="profile_image" />
          ) : (
            <>
              {user.image === "image3" ? (
                <HS.HeaderMypage src={profile3} alt="profile_image" />
              ) : (
                <HS.HeaderMypage src={profile4} alt="profile_image" />
              )}
            </>
          )}
        </>
      )}
    </HS.HeaderContainer>
  );
}
