import React, { useState } from "react";
import S from "../../uis/RegistUI";

const SubmitMethod = () => {
  const methodList = [
    "온라인지원",
    "간편입사지원",
    "이메일지원",
    "홈페이지",
    "문자지원",
    "전화 후 방문",
    "방문접수",
    "우편",
    "팩스",
  ];
  const [method, setMethod] = useState([]);
  const handleMethodChange = (e) => {
    const selectedMethod = e.target.value;
    if (method.includes(selectedMethod)) {
      setMethod(method.filter((type) => type !== selectedMethod));
    } else {
      setMethod([...method, selectedMethod]);
    }
  };
  return (
    <S.CheckBoxWrapper>
      {methodList.map((type) => (
        <S.CheckBoxLabel key={type}>
          <S.CheckBoxInput
            type="checkbox"
            name="method"
            value={type}
            checked={method.includes(type)}
            onChange={handleMethodChange}
          />
          {type}
        </S.CheckBoxLabel>
      ))}
    </S.CheckBoxWrapper>
  );
};

export default SubmitMethod;
