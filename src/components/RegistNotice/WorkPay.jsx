import React, { useState, useEffect } from "react";
import S from "../../uis/RegistUI";

const WorkPay = ({ value, onChange }) => {
  const [payType, setPayType] = useState("hourly");
  const [payAmount, setPayAmount] = useState("");

  useEffect(() => {
    onChange(`${payType === "hourly" ? "시급" : "월급"} ${payAmount}`);
  }, [payType, payAmount, onChange]);

  const handlePayTypeChange = (e) => {
    setPayType(e.target.value);
  };

  const handlePayAmountChange = (e) => {
    setPayAmount(e.target.value);
  };

  return (
    <div>
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
    </div>
  );
};

export default WorkPay;
