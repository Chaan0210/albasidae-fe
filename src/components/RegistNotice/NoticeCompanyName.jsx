// 회사명 입력 컴포넌트
// Byte Counter 기능

import React, { useState, useEffect } from "react";
import S from "../../uis/RegistUI";

const NoticeCompanyName = ({ value, onChange }) => {
  const [byteCount, setByteCount] = useState(0);

  useEffect(() => {
    setByteCount(value.length);
  }, [value]);

  return (
    <div>
      <S.NoticeInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="회사명"
      />
      <S.ByteCounter_2>({byteCount}/250bytes)</S.ByteCounter_2>
    </div>
  );
};

export default NoticeCompanyName;
