import React, { useState } from "react";
import styled from "styled-components";

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
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <S.Wrapper>
      <S.Input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <S.Image src={image} alt="Profile" />}
    </S.Wrapper>
  );
};

export default ProfileImage;
