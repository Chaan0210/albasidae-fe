import React, { useState, useEffect } from "react";
import HeaderSignUp from "../../components/auth/HeaderSignUp";
import S from "../../uis/FindUI";

const FindPassword = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    role: "",
    email: "",
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
    if (name === "phone" && (!/^[0-9]*$/.test(value) || value.length > 11)) {
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

  const handleSubmit = () => {
    if (formData.phone.length !== 11) {
      setErrorMessage("유효한 전화번호를 입력하세요.");
      return;
    }
    setErrorMessage("");
    console.log(formData);
  };

  return (
    <S.Wrapper>
      <HeaderSignUp />

      <S.Container>
        <S.Title>비밀번호 찾기</S.Title>
        <S.TabWrapper>
          <S.TabLeft
            active={activeTab === "personal"}
            onClick={() => {
              setActiveTab("personal");
              setFormData({ ...formData, role: "PERSONAL" });
            }}
          >
            개인회원
          </S.TabLeft>
          <S.TabRight
            active={activeTab === "company"}
            onClick={() => {
              setActiveTab("company");
              setFormData({ ...formData, role: "COMPANY" });
            }}
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
                name="email"
                placeholder="이메일을 입력해주세요."
                value={formData.email}
                onChange={handleChange}
              />
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
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
            />
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
        <S.Button activeTab={activeTab} onClick={handleSubmit}>
          {activeTab === "personal"
            ? "개인회원 비밀번호 찾기"
            : "기업회원 비밀번호 찾기"}
        </S.Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default FindPassword;
