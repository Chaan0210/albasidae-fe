import React, { useState } from "react";
import S from "../../uis/RegistUI";

const WorkPay = ({ value, onChange }) => {
  const [payType, setPayType] = useState("hourly");
  const [payAmount, setPayAmount] = useState("");

  const handlePayTypeChange = (e) => {
    const newPayType = e.target.value;
    setPayType(newPayType);
    onChange(`${newPayType === "hourly" ? "시급" : "월급"} ${payAmount}`);
  };

  const handlePayAmountChange = (e) => {
    const newPayAmount = e.target.value;
    setPayAmount(newPayAmount);
    onChange(`${payType === "hourly" ? "시급" : "월급"} ${newPayAmount}`);
  };

  return (
    <S.PayContainer>
      <S.EducationSelect value={payType} onChange={handlePayTypeChange}>
        <option value="hourly">시급</option>
        <option value="monthly">월급</option>
      </S.EducationSelect>
      &nbsp;
      <S.PayInput
        type="text"
        value={payAmount}
        onChange={handlePayAmountChange}
        placeholder="예) 12000"
      />
      &nbsp;원
    </S.PayContainer>
  );
};

export default WorkPay;
