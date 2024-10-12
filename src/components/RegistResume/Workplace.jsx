import React, { useState } from "react";
import S from "../../uis/RegistUI";

const Workplace = () => {
  const locationList = ["서울"];
  const [location, setLocation] = useState([]);
  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    if (location.includes(selectedLocation)) {
      setLocation(location.filter((type) => type !== selectedLocation));
    } else {
      setLocation([...location, selectedLocation]);
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
            checked={location.includes(type)}
            onChange={handleLocationChange}
          />
          {type}
        </S.CheckBoxLabel>
      ))}
    </S.CheckBoxWrapper>
  );
};

export default Workplace;
