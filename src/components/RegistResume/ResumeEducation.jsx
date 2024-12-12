// 학력 선택 컴포넌트

import S from "../../uis/RegistUI";
import React, { useState, useEffect } from "react";

const ResumeEducation = ({ value, onChange }) => {
  const selectList = [
    "대학교 1학년 재학 중",
    "대학교 2학년 재학 중",
    "대학교 3학년 재학 중",
    "대학교 4학년 재학 중",
    "대학 졸업",
    "대학원",
  ];

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const [selected, setSelected] = useState(value);

  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    setSelected(newValue);
    onChange(newValue);
  };

  return (
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
  );
};

export default ResumeEducation;
