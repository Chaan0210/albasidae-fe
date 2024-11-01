import React from "react";
import S from "../../uis/RegistUI";

const Workplace = ({ value = [], onChange }) => {
  const locationList = ["휘경동", "전농동", "이문동", "답십리동", "청량리동"];

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    if (value.includes(selectedLocation)) {
      onChange(value.filter((type) => type !== selectedLocation));
    } else {
      onChange([...value, selectedLocation]);
    }
  };
  return (
    <S.CheckBoxWrapper>
      {locationList.map((type) => (
        <S.CheckBoxLabel key={type}>
          <S.CheckBoxInput
            type="checkbox"
            name="location"
            value={type}
            checked={value.includes(type)}
            onChange={handleLocationChange}
          />
          {type}
        </S.CheckBoxLabel>
      ))}
    </S.CheckBoxWrapper>
  );
};

export default Workplace;
