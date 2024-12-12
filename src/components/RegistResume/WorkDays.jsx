// 원하는 요일 선택 컴포넌트

import React from "react";
import S from "../../uis/RegistUI";

const WorkDays = ({ value, onChange }) => {
  return (
    <S.TabWrapper>
      <S.TabLeft
        active={value === "weekdays"}
        onClick={() => onChange("weekdays")}
      >
        &nbsp;&nbsp;평일&nbsp;&nbsp;
      </S.TabLeft>
      <S.TabMiddle
        active={value === "weekend"}
        onClick={() => onChange("weekend")}
      >
        &nbsp;&nbsp;주말&nbsp;&nbsp;
      </S.TabMiddle>
      <S.TabRight
        active={value === "regardless"}
        onClick={() => onChange("regardless")}
      >
        요일무관
      </S.TabRight>
    </S.TabWrapper>
  );
};

export default WorkDays;
