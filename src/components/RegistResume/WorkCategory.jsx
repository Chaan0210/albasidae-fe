import React, { useState } from "react";
import S from "../../uis/RegistResumeUI";

const ResumeTitle = () => {
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
  const [occupation, setOccupation] = useState([]);
  const handleOccupationChange = (e) => {
    const selectedOccupation = e.target.value;
    if (occupation.includes(selectedOccupation)) {
      setOccupation(occupation.filter((type) => type !== selectedOccupation));
    } else {
      setOccupation([...occupation, selectedOccupation]);
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
            checked={occupation.includes(type)}
            onChange={handleOccupationChange}
          />
          {type}
        </S.CheckBoxLabel>
      ))}
    </S.CheckBoxWrapper>
  );
};

export default ResumeTitle;
