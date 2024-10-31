import React from "react";
import S from "../../uis/RegistUI";

const Deadline = ({ value, onChange }) => {
  const selectedDeadline =
    value === "상시모집" ? "select" : value ? "immediate" : null;
  const deadlineDate = value && value !== "상시모집" ? value : "";

  const handleSelectDeadline = (deadline) => {
    if (deadline === "select") {
      onChange("상시모집");
    } else {
      onChange("immediate");
    }
  };

  const handleDateChange = (e) => {
    onChange(e.target.value);
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
