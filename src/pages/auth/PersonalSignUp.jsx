import React, { useState } from "react";
import styled from "styled-components";
import HeaderSignUp from "../../components/auth/HeaderSignUp";

const S = {
  Wrapper: styled.div``,
  Container: styled.div`
    max-width: 500px;
    margin: 40px auto;
    padding: 10px 40px 10px 40px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
  `,
  Title: styled.div`
    font-size: 27px;
    font-weight: bold;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
    padding: 15px 0 15px 0;
  `,
  InputWrapper: styled.div``,
  Input: styled.input`
    width: 96.5%;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 15px 0px 15px 15px;
    outline: none;
  `,
  DoubleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 20px;
    align-items: center;
  `,
  InputFirst: styled.input`
    width: 95%;
    border: none;
    padding: 15px 0px 15px 5px;
    border-bottom: 1px solid #ddd;
    font-size: 16px;
    outline: none;
  `,
  InputSecond: styled.input`
    width: 95%;
    border: none;
    padding: 15px 0px 15px 5px;
    font-size: 16px;
    outline: none;
  `,
  Button: styled.button`
    width: 100%;
    padding: 15px;
    font-size: 16px;
    border-radius: 10px;
    font-weight: bold;
    background-color: #fdf25d;
    border: 1px solid #fae04b;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `,
};

const PersonalSignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
    birthDate: "",
    email: "",
    phone: "",
  });
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
      username: formData.username,
      password: formData.password,
      role: "user",
      name: formData.name,
      birthDate: formData.birthDate,
      email: formData.email,
      phone: formData.phone,
      businessNumber: "",
    };

    try {
      const response = await fetch(
        `${window.location.origin}/api/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();
      if (response.ok && data.result === true) {
        alert("회원가입이 완료되었습니다.");
      } else {
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
            type="text"
            name="username"
            placeholder="아이디 (4~15자 영문, 숫자)"
            value={formData.username}
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
          <S.Input
            type="email"
            name="email"
            placeholder="이메일"
            value={formData.email}
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
            {/* <S.InputSecond type="text"
              name="verificationCode"
              placeholder="인증번호"
              value={formData.verificationCode}
              onChange={handleChange} /> */}
          </S.DoubleWrapper>
        </S.InputWrapper>

        <S.Button onClick={handleSubmit}>가입하기</S.Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default PersonalSignUp;
