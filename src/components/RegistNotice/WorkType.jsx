// 근무형태 체크박스 선택 컴포넌트

import React from "react";
import S from "../../uis/RegistUI";

const WorkType = ({ value = [], onChange }) => {
  const workTypeList = ["아르바이트", "계약직", "정규직", "인턴쉽", "프리랜서"];

  const handleWorkTypeChange = (selectedWorkType) => {
    if (value.includes(selectedWorkType)) {
      onChange(value.filter((type) => type !== selectedWorkType));
    } else {
      onChange([...value, selectedWorkType]);
    }
  };

  return (
    <S.CheckBoxWrapper>
      {workTypeList.map((type) => (
        <S.CheckBoxLabel key={type}>
          <S.CheckBoxInput
            type="checkbox"
            name="workType"
            value={type}
            checked={value.includes(type)}
            onChange={() => handleWorkTypeChange(type)}
          />
          {type}
        </S.CheckBoxLabel>
      ))}
    </S.CheckBoxWrapper>
  );
};

export default WorkType;
