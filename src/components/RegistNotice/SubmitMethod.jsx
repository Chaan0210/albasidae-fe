import React from "react";
import S from "../../uis/RegistUI";

const SubmitMethod = ({ value = [], onChange }) => {
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

  const handleMethodChange = (e) => {
    const selectedMethod = e.target.value;
    if (value.includes(selectedMethod)) {
      onChange(value.filter((type) => type !== selectedMethod));
    } else {
      onChange([...value, selectedMethod]);
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
            checked={value.includes(type)}
            onChange={handleMethodChange}
          />
          {type}
        </S.CheckBoxLabel>
      ))}
    </S.CheckBoxWrapper>
  );
};

export default SubmitMethod;
