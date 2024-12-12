// 카카오 주소 검색 API를 이용한 주소 검색 컴포넌트

import React, { useState, useEffect } from "react";
import S from "../../uis/RegistUI";

const WorkAddress = ({ value, onChange }) => {
  const [fullAddress, setFullAddress] = useState(value);
  const [isApiLoaded, setIsApiLoaded] = useState(false);

  useEffect(() => {
    if (!document.getElementById("kakao-postcode-script")) {
      const script = document.createElement("script");
      script.id = "kakao-postcode-script";
      script.src =
        "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      script.async = true;
      script.onload = () => {
        setIsApiLoaded(true);
      };
      document.head.appendChild(script);
    } else {
      setIsApiLoaded(true);
    }
  }, []);

  const handleComplete = (data) => {
    let address = data.address;
    if (data.addressType === "R") {
      if (data.bname !== "") {
        address += ` ${data.bname}`;
      }
      if (data.buildingName !== "") {
        address += `, ${data.buildingName}`;
      }
    }
    setFullAddress(address);
    onChange(address);
  };

  const handleClick = () => {
    if (isApiLoaded && window.daum && window.daum.Postcode) {
      new window.daum.Postcode({
        oncomplete: handleComplete,
      }).open();
    } else {
      alert("주소 API가 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <S.AddressContainer>
      <S.AddressInput
        type="text"
        value={fullAddress}
        readOnly
        placeholder="주소를 검색해주세요."
      />
      <S.SearchButton type="button" onClick={handleClick}>
        주소 검색
      </S.SearchButton>
    </S.AddressContainer>
  );
};

export default WorkAddress;
