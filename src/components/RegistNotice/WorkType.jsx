import React, { useState } from "react";
import S from "../../uis/RegistUI";

const WorkType = () => {
  const workTypeList = ["아르바이트", "계약직", "정규직", "인턴쉽", "프리랜서"];
  const [workType, setWorkType] = useState([]);

  const handleWorkTypeChange = (e) => {
    const selectedWorkType = e.target.value;
    if (workType.includes(selectedWorkType)) {
      setWorkType(workType.filter((type) => type !== selectedWorkType));
    } else {
      setWorkType([...workType, selectedWorkType]);
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
            checked={workType.includes(type)}
            onChange={handleWorkTypeChange}
          />
          {type}
        </S.CheckBoxLabel>
      ))}
    </S.CheckBoxWrapper>
  );
};

export default WorkType;
