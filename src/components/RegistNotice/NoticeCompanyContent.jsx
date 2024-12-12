// 사업내용 입력 컴포넌트

import React, { useState, useEffect } from "react";
import S from "../../uis/RegistUI";

const NoticeCompanyContent = ({ value, onChange }) => {
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
        placeholder="회사의 주요 사업내용을 입력해주세요."
      />
      <S.ByteCounter_2>({byteCount}/1000bytes)</S.ByteCounter_2>
    </div>
  );
};

export default NoticeCompanyContent;
