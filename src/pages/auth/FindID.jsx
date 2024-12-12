// 아이디 찾기 페이지
// 개인회원과 기업회원이 이름, 전화번호, 사업자등록번호 등을 입력하여 자신의 이메일을 찾을 수 있는 기능

import React, { useState, useEffect } from "react";
import HeaderSignUp from "../../components/auth/HeaderSignUp";
import S from "../../uis/FindUI";

const FindID = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [activeTab, setActiveTab] = useState("personal");
  const [errorMessage, setErrorMessage] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [formData, setFormData] = useState({
    role: "PERSONAL",
    name: "",
    phone: "",
    businessNumber: "",
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      role: activeTab === "personal" ? "PERSONAL" : "COMPANY",
    }));
  }, [activeTab]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^[0-9]*$/.test(value)) {
      return;
    }
    if (name === "phone" && value.length > 11) {
      return;
    }
    if (name === "businessNumber" && !/^[0-9]*$/.test(value)) {
      return;
    }
    setErrorMessage("");
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (activeTab === "personal") {
      if (!formData.name || !formData.phone) {
        setErrorMessage("모든 필드를 입력해주세요.");
        setResultMessage("");
        return;
      }
    } else if (activeTab === "company") {
      if (!formData.businessNumber || !formData.name || !formData.phone) {
        setErrorMessage("모든 필드를 입력해주세요.");
        setResultMessage("");
        return;
      }
    }
    if (formData.phone.length !== 11) {
      setErrorMessage("유효한 전화번호를 입력하세요.");
      setResultMessage("");
      return;
    }
    setErrorMessage("");
    setResultMessage("");

    try {
      const response = await fetch(
        `${API_URL}/api/users/find-id?name=${formData.name}&phone=${formData.phone}&role=${formData.role}` +
          (formData.role === "COMPANY" && formData.businessNumber
            ? `&businessNumber=${formData.businessNumber}`
            : ""),
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setResultMessage(`${data.message}!\n\n\n이메일: ${data.data}`);
        setErrorMessage("");
      } else {
        setErrorMessage("아이디 찾기에 실패했습니다. 다시 시도해주세요.");
        setResultMessage("");
      }
    } catch (error) {
      setErrorMessage("아이디 찾기에 실패했습니다. 다시 시도해주세요.");
      setResultMessage("");
    }
  };

  return (
    <S.Wrapper>
      <HeaderSignUp />

      <S.Container>
        <S.Title>아이디 찾기</S.Title>
        <S.TabWrapper>
          <S.TabLeft
            active={activeTab === "personal"}
            onClick={() => setActiveTab("personal")}
          >
            개인회원
          </S.TabLeft>
          <S.TabRight
            active={activeTab === "company"}
            onClick={() => setActiveTab("company")}
          >
            기업회원
          </S.TabRight>
        </S.TabWrapper>

        <S.Subtitle>가입정보로 찾기</S.Subtitle>

        {activeTab === "personal" ? (
          <>
            <S.MultiWrapper>
              <S.InputFirst
                type="text"
                name="name"
                placeholder="이름을 입력해주세요."
                value={formData.name}
                onChange={handleChange}
              />
              <S.InputSecond
                type="text"
                name="phone"
                placeholder="휴대폰(- 제외 번호 입력)"
                value={formData.phone}
                onChange={handleChange}
              />
            </S.MultiWrapper>
          </>
        ) : (
          <S.MultiWrapper>
            <S.InputFirst
              type="text"
              name="businessNumber"
              placeholder="사업자등록번호(- 제외 번호 입력)"
              value={formData.businessNumber}
              onChange={handleChange}
            />
            <S.InputFirst
              type="text"
              name="name"
              placeholder="담당자명"
              value={formData.name}
              onChange={handleChange}
            />
            <S.InputSecond
              type="text"
              name="phone"
              placeholder="휴대폰(- 제외 번호 입력)"
              value={formData.phone}
              onChange={handleChange}
            />
          </S.MultiWrapper>
        )}
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        {resultMessage && <S.SuccessMessage>{resultMessage}</S.SuccessMessage>}
        <S.Button activeTab={activeTab} onClick={handleSubmit}>
          {activeTab === "personal"
            ? "개인회원 아이디 찾기"
            : "기업회원 아이디 찾기"}
        </S.Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default FindID;
