import React from "react";
import S from "../../uis/RegistUI";

const NoticeCareer = ({ value, onChange }) => {
  const handleSelectCareer = (career) => {
    onChange(career);
  };

  return (
    <S.CheckBoxWrapper>
      <S.Button
        isSelected={value === "any"}
        onClick={() => handleSelectCareer("any")}
      >
        무관(신입/경력에 상관없이 모집)
      </S.Button>
      <S.Button
        isSelected={value === "inexperienced"}
        onClick={() => handleSelectCareer("inexperienced")}
      >
        신입
      </S.Button>
      <S.Button
        isSelected={value === "experienced"}
        onClick={() => handleSelectCareer("experienced")}
      >
        경력
      </S.Button>
    </S.CheckBoxWrapper>
  );
};

export default NoticeCareer;
