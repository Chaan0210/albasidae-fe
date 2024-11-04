import React from "react";
import S from "../../uis/RegistUI";

const WorkTime = ({ value, onChange }) => {
  const selectedTime = value === "any" ? "any" : value ? "select" : null;

  const [minTime, maxTime] =
    value && value.includes("~") ? value.split("~") : ["", ""];

  const handleSelectTime = (time) => {
    if (time === "any") {
      onChange("any");
    } else {
      onChange(`${minTime}~${maxTime}`);
    }
  };

  const handleMinTimeChange = (e) => {
    const newMinTime = e.target.value;
    onChange(`${newMinTime}~${maxTime}`);
  };

  const handleMaxTimeChange = (e) => {
    const newMaxTime = e.target.value;
    onChange(`${minTime}~${newMaxTime}`);
  };

  return (
    <S.CheckBoxWrapper>
      <S.Button
        isSelected={selectedTime === "any"}
        onClick={() => handleSelectTime("any")}
      >
        시간협의
      </S.Button>
      <S.Button
        isSelected={selectedTime === "select"}
        onClick={() => handleSelectTime("select")}
      >
        직접입력
      </S.Button>
      {selectedTime === "select" && (
        <S.AgeSelectWrapper>
          <S.Select value={minTime} onChange={handleMinTimeChange}>
            <option value="">선택</option>
            {[...Array(24).keys()].map((time) => (
              <option key={time} value={time + 1}>
                {time + 1}
              </option>
            ))}
          </S.Select>
          ~
          <S.Select value={maxTime} onChange={handleMaxTimeChange}>
            <option value="">선택</option>
            {[...Array(24).keys()].map((time) => (
              <option key={time} value={time + 1}>
                {time + 1}
              </option>
            ))}
          </S.Select>
        </S.AgeSelectWrapper>
      )}
    </S.CheckBoxWrapper>
  );
};

export default WorkTime;
