import React, { useState } from "react";
import S from "../../uis/RegistUI";

const NoticeCareer = () => {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const handleSelectCareer = (career) => {
    setSelectedCareer(career);
  };

  return (
    <S.CheckBoxWrapper>
      <S.Button
        isSelected={selectedCareer === "any"}
        onClick={() => handleSelectCareer("any")}
      >
        무관(신입/경력에 상관없이 모집)
      </S.Button>
      <S.Button
        isSelected={selectedCareer === "inexperienced"}
        onClick={() => handleSelectCareer("inexperienced")}
      >
        신입
      </S.Button>
      <S.Button
        isSelected={selectedCareer === "experienced"}
        onClick={() => handleSelectCareer("experienced")}
      >
        경력
      </S.Button>
    </S.CheckBoxWrapper>
  );
};

export default NoticeCareer;
