import React from "react";
import S from "../../uis/RegistUI";

const Gender = ({ value, onChange }) => {
  const handleSelectGender = (gender) => {
    onChange(gender);
  };

  return (
    <S.CheckBoxWrapper>
      <S.Button
        isSelected={value === "any"}
        onClick={() => handleSelectGender("any")}
      >
        성별무관
      </S.Button>
      <S.Button
        isSelected={value === "male"}
        onClick={() => handleSelectGender("male")}
      >
        남자
      </S.Button>
      <S.Button
        isSelected={value === "female"}
        onClick={() => handleSelectGender("female")}
      >
        여자
      </S.Button>
    </S.CheckBoxWrapper>
  );
};

export default Gender;
