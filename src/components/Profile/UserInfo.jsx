import React, { useState, useEffect, useContext, useRef } from "react";
import { ReactComponent as SettingIcon } from "../../images/Setting.svg";
import { AuthContext } from "../auth/AuthContext";
import S from "../../uis/ProfileUI";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate();
  const { email } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/users/${encodeURIComponent(email)}`
        );
        const data = await response.json();
        if (response.ok && data.result) {
          setFormData({
            name: data.data.name,
            image: data.data.image,
          });
        } else {
          console.error("Fail to fetch : ", data.message);
        }
      } catch (error) {
        console.error("Error fetching user data : ", error);
      }
    };
    fetchUserData();
  }, [email]);

  const handleSettingClick = () => {
    navigate("/userinfochange");
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(
          `http://localhost:8080/api/users/${encodeURIComponent(email)}/image`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
            },
            body: formData,
          }
        );

        if (response.ok) {
          const updatedImageURL = URL.createObjectURL(file);
          setFormData((prev) => ({
            ...prev,
            image: updatedImageURL,
          }));
        } else {
          const data = await response.json();
          console.error("Upload failed: ", data.message);
        }
      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    }
  };

  return (
    <S.UserInfo>
      <S.SettingIcon onClick={handleSettingClick}>
        <SettingIcon />
      </S.SettingIcon>
      <S.UserInfoTop>
        <S.ImageWrapper onClick={handleImageClick}>
          {formData.image ? (
            <S.UserImage src={formData.image} />
          ) : (
            <S.ProfileImage />
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </S.ImageWrapper>

        <S.UserName>{formData.name}</S.UserName>
      </S.UserInfoTop>
      {/* <S.UserInfoBottom>
        <S.BottomText>스크랩알바</S.BottomText>
        0건
      </S.UserInfoBottom>
      <S.UserInfoBottom>
        <S.BottomText>관심기업</S.BottomText>
        0건
      </S.UserInfoBottom> */}
    </S.UserInfo>
  );
};

export default UserInfo;
