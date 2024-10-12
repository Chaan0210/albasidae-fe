import React, { useState } from "react";
import S from "../../uis/RegistUI";

const Age = () => {
  const [selectedAge, setSelectedAge] = useState(null);
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");

  const handleSelectAge = (age) => {
    setSelectedAge(age);
  };

  const handleMinAgeChange = (e) => {
    setMinAge(e.target.value);
  };

  const handleMaxAgeChange = (e) => {
    setMaxAge(e.target.value);
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
