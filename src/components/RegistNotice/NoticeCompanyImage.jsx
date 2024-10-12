import React, { useState } from "react";
import S from "../../uis/RegistUI";

const NoticeCompanyImage = () => {
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  return (
    <S.ImageContainer>
      <S.InputWrapper>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </S.InputWrapper>
      {image && (
        <S.ImagePreview>
          <img
            src={image}
            alt="Company"
            style={{ width: "100%", borderRadius: "5px" }}
          />
        </S.ImagePreview>
      )}
    </S.ImageContainer>
  );
};

export default NoticeCompanyImage;
