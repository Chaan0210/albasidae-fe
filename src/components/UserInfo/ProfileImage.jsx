import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../auth/AuthContext";

const S = {
  Wrapper: styled.div``,
  Input: styled.input``,
  Image: styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  `,
};

const ProfileImage = () => {
  const { email } = useContext(AuthContext);

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

        if (!response.ok) {
          const data = await response.json();
          console.error("Upload failed: ", data.message);
        }
      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    }
  };

  return (
    <S.Wrapper>
      <S.Input type="file" accept="image/*" onChange={handleImageChange} />
    </S.Wrapper>
  );
};

export default ProfileImage;
