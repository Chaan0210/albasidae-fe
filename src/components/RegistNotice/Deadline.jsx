import React, { useState } from "react";
import S from "../../uis/RegistUI";

const Deadline = () => {
  const [selectedDeadline, setSelectedDeadline] = useState(null);
  const [deadlineDate, setDeadlineDate] = useState("");

  const handleSelectDeadline = (deadline) => {
    setSelectedDeadline(deadline);
  };

  const handleDateChange = (e) => {
    setDeadlineDate(e.target.value);
  };

  return (
    <S.CheckBoxWrapper>
      <S.Button
        isSelected={selectedDeadline === "select"}
        onClick={() => handleSelectDeadline("select")}
      >
        상시모집
      </S.Button>
      <S.Button
        isSelected={selectedDeadline === "immediate"}
        onClick={() => handleSelectDeadline("immediate")}
      >
        마감일 선택
      </S.Button>
      {selectedDeadline === "immediate" && (
        <S.DatePickerWrapper>
          <S.DateInput
            type="date"
            value={deadlineDate}
            onChange={handleDateChange}
          />
        </S.DatePickerWrapper>
      )}
    </S.CheckBoxWrapper>
  );
};

export default Deadline;
