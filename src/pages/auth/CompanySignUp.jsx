import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    background-color: #5194f6;
    border: 1px solid #2f6df6;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `,

  InputButton: styled.div`
    position: relative;
  `,
  Certify: styled.div`
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 20px 280px 20px 10px;
    outline: none;
    box-sizing: border-box;
    align-items: center;
  `,
  CertifyButton: styled.button`
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    background-color: white;
    color: #2f6df6;
    padding: 8px 15px 8px 15px;
    border-radius: 7px;
    border: 1px solid #2f6df6;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  `,
};

const CompanySignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
    birthDate: "",
    email: "",
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
      username: formData.username,
      password: formData.password,
      role: "company",
      name: "",
      birthDate: "",
      email: formData.email,
      phone: formData.phone,
      businessNumber: formData.businessnum,
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

      const data = await response.json();
      if (response.ok && data.result === true) {
        alert("회원가입이 완료되었습니다.");
        navigate("/");
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
        <S.Title>기업회원가입</S.Title>
        <S.InputWrapper>
          <S.InputButton>
            <S.Certify>본인명의 휴대폰으로 인증 가능</S.Certify>
            <S.CertifyButton>인증하기</S.CertifyButton>
          </S.InputButton>

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
            type="email"
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
          />
          <S.Input
            type="email"
            name="businessnum"
            placeholder="사업자번호"
            value={formData.businessnum}
            onChange={handleChange}
          />
        </S.InputWrapper>
        <S.Button onClick={handleSubmit}>가입하기</S.Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default CompanySignUp;
