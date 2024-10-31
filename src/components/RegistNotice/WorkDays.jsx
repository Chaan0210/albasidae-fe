import React from "react";
import S from "../../uis/RegistUI";

const WorkDays = ({ value = [], onChange }) => {
  const daysList = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];

  const handleDaysChange = (e) => {
    const selectedDays = e.target.value;
    if (value.includes(selectedDays)) {
      onChange(value.filter((type) => type !== selectedDays));
    } else {
      onChange([...value, selectedDays]);
    }
  };

  return (
    <S.CheckBoxWrapper>
      {daysList.map((type) => (
        <S.CheckBoxLabel key={type}>
          <S.CheckBoxInput
            type="checkbox"
            name="days"
            value={type}
            checked={value.includes(type)}
            onChange={handleDaysChange}
          />
          {type}
        </S.CheckBoxLabel>
      ))}
    </S.CheckBoxWrapper>
  );
};

export default WorkDays;
