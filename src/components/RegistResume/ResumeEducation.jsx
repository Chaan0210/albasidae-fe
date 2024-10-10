import S from "../../uis/RegistResumeUI";
import React, { useState } from "react";

const ResumeEducation = () => {
  const selectList = [
    "대학원",
    "대학(4년)",
    "대학(2, 3년)",
    "고등학교",
    "중학교",
    "초등학교",
  ];
  const [selected, setSelected] = useState("");
  const handleSelectChange = (e) => {
    setSelected(e.target.value);
  };
  return (
    <S.SubTitleWrapper>
      <S.SubTitle>최종학력</S.SubTitle>
      <S.EducationSelect value={selected} onChange={handleSelectChange}>
        <option value="" disabled>
          선택
        </option>
        {selectList.map((education, index) => (
          <option key={index} value={education}>
            {education}
          </option>
        ))}
      </S.EducationSelect>
    </S.SubTitleWrapper>
  );
};

export default ResumeEducation;
