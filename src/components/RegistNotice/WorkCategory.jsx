import React from "react";
import S from "../../uis/RegistUI";

const WorkCategory = ({ value = [], onChange }) => {
  const occupationList = [
    "외식, 음료",
    "유통, 판매",
    "문화, 여가, 생활",
    "서비스",
    "사무, 회계",
    "고객상담, 영업, 리서치",
    "생산, 건설, 노무",
    "IT, 인터넷",
    "교육, 강사",
    "디자인",
    "미디어",
    "운전, 배달",
    "병원, 간호, 연구",
  ];

  const handleOccupationChange = (selectedOccupation) => {
    if (value.includes(selectedOccupation)) {
      onChange(value.filter((type) => type !== selectedOccupation));
    } else {
      onChange([...value, selectedOccupation]);
    }
  };

  return (
    <S.CheckBoxWrapper>
      {occupationList.map((type) => (
        <S.CheckBoxLabel key={type}>
          <S.CheckBoxInput
            type="checkbox"
            name="occupation"
            value={type}
            checked={value.includes(type)}
            onChange={() => handleOccupationChange(type)}
          />
          {type}
        </S.CheckBoxLabel>
      ))}
    </S.CheckBoxWrapper>
  );
};

export default WorkCategory;
