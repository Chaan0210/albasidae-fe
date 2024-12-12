// 기업 회원가입 페이지
// 이메일, 비밀번호, 사업자번호, 담당자명, 전화번호 등의 정보를 입력하고 가입 요청을 보낼 수 있는 기능

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderSignUp from "../../components/auth/HeaderSignUp";
import S from "../../uis/SignupUI";
import { AuthContext } from "../../components/auth/AuthContext";

const CompanySignUp = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
    phone: "",
    businessNumber: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && (!/^[0-9]*$/.test(value) || value.length > 11)) {
      return;
    }
    if (name === "password" && value.length > 15) {
      return;
    }
    if (name === "confirmPassword" && value.length > 15) {
      return;
    }
    if (
      name === "businessNumber" &&
      (!/^[0-9]*$/.test(value) || value.length > 10)
    ) {
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    if (Object.values(formData).some((field) => field === "")) {
      setErrorMessage("모든 필드를 입력해주세요.");
      return;
    }

    if (formData.phone.length !== 11) {
      setErrorMessage("유효한 전화번호를 입력하세요.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    const requestBody = {
      email: formData.email,
      password: formData.password,
      role: "COMPANY",
      name: formData.name,
      birthDate: "",
      phone: formData.phone,
      businessNumber: formData.businessNumber,
    };

    try {
      const response = await fetch(`${API_URL}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
        body: JSON.stringify(requestBody),
        mode: "cors",
      });

      const data = await response.json();
      if (response.ok && data.result === true) {
        signup(data.data.token, "COMPANY", formData.email);
        navigate("/");
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return (
    <S.Wrapper>
      <HeaderSignUp />
      <S.Container>
        <S.Title>기업회원가입</S.Title>
        <S.InputWrapper>
          <S.Input
            type="email"
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
          />
          <S.DoubleWrapper>
            <S.InputFirst
              type="password"
              name="password"
              placeholder="비밀번호(8~15자)"
              value={formData.password}
              onChange={handleChange}
            />
            <S.InputSecond
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 재입력"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </S.DoubleWrapper>

          <S.Input
            type="email"
            name="businessNumber"
            placeholder="사업자번호"
            value={formData.businessNumber}
            onChange={handleChange}
          />
          <S.Input
            type="text"
            name="name"
            placeholder="담당자명"
            value={formData.name}
            onChange={handleChange}
          />
          <S.Input
            type="text"
            name="phone"
            placeholder="휴대폰 번호"
            value={formData.phone}
            onChange={handleChange}
          />
        </S.InputWrapper>
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        <S.CompanyButton onClick={handleSubmit}>가입하기</S.CompanyButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default CompanySignUp;
