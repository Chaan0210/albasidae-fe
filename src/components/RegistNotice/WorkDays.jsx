import React, { useState } from "react";
import S from "../../uis/RegistUI";

const WorkDays = () => {
  const daysList = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];
  const [days, setDays] = useState([]);
  const handleDaysChange = (e) => {
    const selectedDays = e.target.value;
    if (days.includes(selectedDays)) {
      setDays(days.filter((type) => type !== selectedDays));
    } else {
      setDays([...days, selectedDays]);
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
            checked={days.includes(type)}
            onChange={handleDaysChange}
          />
          {type}
        </S.CheckBoxLabel>
      ))}
    </S.CheckBoxWrapper>
  );
};

export default WorkDays;
