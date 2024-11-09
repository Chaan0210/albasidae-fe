import React, { useEffect } from "react";
import S from "../../uis/RegistUI";

const NoticeCompanyImage = ({ value, onChange }) => {
  const [previewUrl, setPreviewUrl] = React.useState(null);

  useEffect(() => {
    if (value) {
      const objectUrl = URL.createObjectURL(value);
      setPreviewUrl(objectUrl);

      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    }
  }, [value]);

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

      <S.ImagePreview>
        <img src={previewUrl} alt="Company" width="200px" height="200px" />
      </S.ImagePreview>
    </S.ImageContainer>
  );
};

export default NoticeCompanyImage;
