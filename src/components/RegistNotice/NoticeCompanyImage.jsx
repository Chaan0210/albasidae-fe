import React from "react";
import S from "../../uis/RegistUI";

const NoticeCompanyImage = ({ value, onChange }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <S.ImageContainer>
      <S.InputWrapper>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </S.InputWrapper>
      {value && (
        <S.ImagePreview>
          <img
            src={URL.createObjectURL(value)}
            alt="Company"
            style={{ width: "100%" }}
          />
        </S.ImagePreview>
      )}
    </S.ImageContainer>
  );
};

export default NoticeCompanyImage;
