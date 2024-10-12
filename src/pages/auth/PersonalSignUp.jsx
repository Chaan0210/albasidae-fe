import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderSignUp from "../../components/auth/HeaderSignUp";
import S from "../../uis/SignupUI";

const PersonalSignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    birthDate: "",
    phone: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const requestBody = {
      email: formData.email,
      password: formData.password,
      role: "USER",
      name: formData.name,
      birthDate: formData.birthDate,
      phone: formData.phone,
      businessNumber: "",
    };

    try {
      const response = await fetch(
        `https://6153-211-178-236-156.ngrok-free.app/api/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
          mode: "cors",
        }
      );
      console.log(window.location.origin);
      const data = await response.json();
      if (response.ok && data.result === true) {
        alert("회원가입이 완료되었습니다.");
        navigate("/");
      } else {
        console.error("서버 응답:", data);
        alert("회원가입에 실패했습니다: " + data.message);
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
        <S.Title>개인회원가입</S.Title>

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
              placeholder="비밀번호 (8~15자)"
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
            type="text"
            name="name"
            placeholder="이름"
            value={formData.name}
            onChange={handleChange}
          />
          <S.Input
            type="text"
            name="birthDate"
            placeholder="생년월일"
            value={formData.birthDate}
            onChange={handleChange}
          />

          <S.DoubleWrapper>
            <S.InputFirst
              type="text"
              name="phone"
              placeholder="휴대폰 번호"
              value={formData.phone}
              onChange={handleChange}
            />
            <S.InputSecond
              type="text"
              name="verificationCode"
              placeholder="인증번호(아직 구현 안함)"
              value={formData.verificationCode}
              onChange={handleChange}
            />
          </S.DoubleWrapper>
        </S.InputWrapper>

        <S.Button onClick={handleSubmit}>가입하기</S.Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default PersonalSignUp;
