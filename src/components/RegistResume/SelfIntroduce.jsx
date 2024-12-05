import React, { useState, useEffect } from "react";
import S from "../../uis/RegistUI";

const SelfIntroduce = ({ value, onChange }) => {
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
      <S.ResumeContent
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="나에 대해 자유롭게 설명하고 채용기회의 확률을 높이세요."
      />
      <S.ByteCounter>({byteCount}/1000bytes)</S.ByteCounter>
    </div>
  );
};

export default SelfIntroduce;
