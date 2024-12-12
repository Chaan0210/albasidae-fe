// 경력 입력 컴포넌트
// Byte Counter 기능

import React, { useState, useEffect } from "react";
import S from "../../uis/RegistUI";

const ResumeCareer = ({ value = "", onChange }) => {
  const [byteCount, setByteCount] = useState(0);

  useEffect(() => {
    const calculateBytes = (str) => {
      let bytes = 0;
      for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        bytes += charCode > 0x007f ? 2 : 1;
      }
      return bytes;
    };

    setByteCount(calculateBytes(value || ""));
  }, [value]);

  return (
    <div>
      <S.CareerContent
        type="text"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder="경력이 있다면 회사명, 근무기간, 담당업무와 내용을 작성해주세요."
      />
      <S.ByteCounter>({byteCount}/1000bytes)</S.ByteCounter>
    </div>
  );
};

export default ResumeCareer;
