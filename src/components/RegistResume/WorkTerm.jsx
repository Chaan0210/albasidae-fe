// 일하는 기간 선택 컴포넌트

import React from "react";
import S from "../../uis/RegistUI";

const WorkTerm = ({ value, onChange }) => {
  return (
    <S.TabWrapper>
      <S.TabLeft
        active={value === "under_three_month"}
        onClick={() => onChange("under_three_month")}
      >
        3개월 이하
      </S.TabLeft>
      <S.TabMiddle
        active={value === "three_six_month"}
        onClick={() => onChange("three_six_month")}
      >
        3개월~6개월
      </S.TabMiddle>
      <S.TabMiddle
        active={value === "six_one_year"}
        onClick={() => onChange("six_one_year")}
      >
        &nbsp;6개월~1년&nbsp;
      </S.TabMiddle>
      <S.TabMiddle
        active={value === "over_one_year"}
        onClick={() => onChange("over_one_year")}
      >
        &nbsp;&nbsp;1년 이상&nbsp;&nbsp;
      </S.TabMiddle>
      <S.TabRight
        active={value === "regardless"}
        onClick={() => onChange("regardless")}
      >
        &nbsp;&nbsp;기간무관&nbsp;&nbsp;
      </S.TabRight>
    </S.TabWrapper>
  );
};

export default WorkTerm;
