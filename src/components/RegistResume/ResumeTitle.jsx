import React, { useState, useEffect } from "react";
import S from "../../uis/RegistUI";

const ResumeTitle = ({ value, onChange }) => {
  const [byteCount, setByteCount] = useState(0);

  useEffect(() => {
    const calculateBytes = (str) => {
      let bytes = 0;
      for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        bytes += charCode > 0x007f ? 2 : 1; // 한글은 2바이트, 영어는 1바이트
      }
      return bytes;
    };

    setByteCount(calculateBytes(value));
  }, [value]);

  return (
    <div>
      <S.ResumeTitle
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="나를 표현할 한마디를 적어보세요."
      />
      <S.ByteCounter>({byteCount}/250bytes)</S.ByteCounter>
    </div>
  );
};

export default ResumeTitle;
