// 사용자 연령 선택하는 컴포넌트

import React from "react";
import S from "../../uis/RegistUI";

const Age = ({ value, onChange }) => {
  const selectedAge = value === "any" ? "any" : value ? "select" : null;

  const [minAge, maxAge] =
    value && value.includes("~") ? value.split("~") : ["", ""];

  const handleSelectAge = (age) => {
    if (age === "any") {
      onChange("any");
    } else {
      onChange(`${minAge}~${maxAge}`);
    }
  };

  const handleMinAgeChange = (e) => {
    const newMinAge = e.target.value;
    onChange(`${newMinAge}~${maxAge}`);
  };

  const handleMaxAgeChange = (e) => {
    const newMaxAge = e.target.value;
    onChange(`${minAge}~${newMaxAge}`);
  };

  return (
    <S.CheckBoxWrapper>
      <S.Button
        isSelected={selectedAge === "any"}
        onClick={() => handleSelectAge("any")}
      >
        연령무관
      </S.Button>
      <S.Button
        isSelected={selectedAge === "select"}
        onClick={() => handleSelectAge("select")}
      >
        연령선택
      </S.Button>
      {selectedAge === "select" && (
        <S.AgeSelectWrapper>
          <S.Select value={minAge} onChange={handleMinAgeChange}>
            <option value="">최소 연령</option>
            {[...Array(100).keys()].map((age) => (
              <option key={age} value={age + 1}>
                {age + 1}
              </option>
            ))}
          </S.Select>
          ~
          <S.Select value={maxAge} onChange={handleMaxAgeChange}>
            <option value="">최대 연령</option>
            {[...Array(100).keys()].map((age) => (
              <option key={age} value={age + 1}>
                {age + 1}
              </option>
            ))}
          </S.Select>
        </S.AgeSelectWrapper>
      )}
    </S.CheckBoxWrapper>
  );
};

export default Age;
