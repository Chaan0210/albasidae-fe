import React, { useState } from "react";
import S from "../../uis/RegistUI";

const Gender = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const handleSelectGender = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <S.CheckBoxWrapper>
      <S.Button
        isSelected={selectedGender === "any"}
        onClick={() => handleSelectGender("any")}
      >
        성별무관
      </S.Button>
      <S.Button
        isSelected={selectedGender === "male"}
        onClick={() => handleSelectGender("male")}
      >
        남자
      </S.Button>
      <S.Button
        isSelected={selectedGender === "female"}
        onClick={() => handleSelectGender("female")}
      >
        여자
      </S.Button>
    </S.CheckBoxWrapper>
  );
};

export default Gender;
