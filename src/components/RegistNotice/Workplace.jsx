import S from "../../uis/RegistUI";
import React, { useState, useEffect } from "react";

const Workplace = ({ value, onChange }) => {
  const selectList = ["휘경동", "전농동", "이문동", "답십리동", "청량리동"];

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
    <S.CheckBoxWrapper>
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
    </S.CheckBoxWrapper>
  );
};

export default Workplace;
