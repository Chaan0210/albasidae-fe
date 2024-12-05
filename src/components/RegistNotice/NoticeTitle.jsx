import React, { useState, useEffect } from "react";
import S from "../../uis/RegistUI";

const NoticeTitle = ({ value, onChange }) => {
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
        placeholder="예) 알바천국 OO점 매장관리 매니저 모집"
      />
      <S.ByteCounter_2>({byteCount}/250bytes)</S.ByteCounter_2>
    </div>
  );
};

export default NoticeTitle;
