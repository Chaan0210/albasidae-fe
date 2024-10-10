import React, { useState } from "react";
import S from "../../uis/RegistResumeUI";

const WorkDays = () => {
  const [activeTab, setActiveTab] = useState("weekdays");
  return (
    <S.TabWrapper>
      <S.TabLeft
        active={activeTab === "weekdays"}
        onClick={() => setActiveTab("weekdays")}
      >
        &nbsp;&nbsp;평일&nbsp;&nbsp;
      </S.TabLeft>
      <S.TabMiddle
        active={activeTab === "weekend"}
        onClick={() => setActiveTab("weekend")}
      >
        &nbsp;&nbsp;주말&nbsp;&nbsp;
      </S.TabMiddle>
      <S.TabRight
        active={activeTab === "regardless"}
        onClick={() => setActiveTab("regardless")}
      >
        요일무관
      </S.TabRight>
    </S.TabWrapper>
  );
};

export default WorkDays;
