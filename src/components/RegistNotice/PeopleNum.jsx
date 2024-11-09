import React from "react";
import S from "../../uis/RegistUI";

const PeopleNum = ({ value, onChange }) => {
  const selectedPeopleNum =
    value === 1
      ? "one"
      : value === 10
      ? "ten"
      : value === 100
      ? "hundred"
      : "direct";
  const directInput = selectedPeopleNum === "direct" ? value : "";

  const handleSelectPeopleNum = (peoplenum) => {
    if (peoplenum === "direct") {
      onChange("");
    } else {
      const numValue = peoplenum === "one" ? 1 : peoplenum === "ten" ? 10 : 100;
      onChange(numValue);
    }
  };

  const handleDirectInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    onChange(isNaN(newValue) ? "" : newValue);
  };

  return (
    <S.CheckBoxWrapper>
      <S.Button
        isSelected={selectedPeopleNum === "one"}
        onClick={() => handleSelectPeopleNum("one")}
      >
        1명
      </S.Button>
      <S.Button
        isSelected={selectedPeopleNum === "ten"}
        onClick={() => handleSelectPeopleNum("ten")}
      >
        10명 미만
      </S.Button>
      <S.Button
        isSelected={selectedPeopleNum === "hundred"}
        onClick={() => handleSelectPeopleNum("hundred")}
      >
        100명 미만
      </S.Button>
      <S.Button
        isSelected={selectedPeopleNum === "direct"}
        onClick={() => handleSelectPeopleNum("direct")}
      >
        직접입력
      </S.Button>

      {selectedPeopleNum === "direct" && (
        <S.DirectInput
          type="number"
          value={directInput}
          onChange={handleDirectInputChange}
          placeholder="인원 수 입력"
        />
      )}
    </S.CheckBoxWrapper>
  );
};

export default PeopleNum;
