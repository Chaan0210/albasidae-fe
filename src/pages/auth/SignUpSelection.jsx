// 회원가입 선택 페이지
// 개인 회원과 기업 회원 중에서 선택하여 회원가입 페이지로 이동할 수 있는 기능

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderSignUp from "../../components/auth/HeaderSignUp";
import { ReactComponent as ProfileImage } from "../../images/ProfileImage.svg";
import { ReactComponent as CompanyImage } from "../../images/CompanyIcon.svg";

const S = {
  Wrapper: styled.div``,
  SignUpWrapper: styled.div`
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
  Card: styled.div`
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  CardTitle: styled.div`
    font-size: 20px;
    font-weight: bold;
    padding: 7px 0 10px 0;
  `,
  Button: styled(Link)`
    background-color: ${({ type }) =>
      type === "personal" ? "#fdf25d" : "#5194f6"};
    border: 1px solid
      ${({ type }) => (type === "personal" ? "#fae04b" : "#2f6df6")};
    border-radius: 0 0 9px 9px;
    text-decoration: none;
    text-align: center;
    margin-top: auto;
    width: 100%;
    transform: translateY(1px);
    &:hover {
      opacity: 0.8;
    }
  `,
  Regist: styled.div`
    color: ${({ type }) => (type === "personal" ? "black" : "white")};
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0 15px 0;
  `,
  Explanation: styled.div`
    color: grey;
    font-size: 16px;
    padding-bottom: 20px;
  `,
  ImageContainer: styled.div`
    padding: 30px 0 0 0;
  `,
  CompanyImage: styled(CompanyImage)`
    width: 60px;
    height: 60px;
  `,
};

const SignUpSelection = () => {
  return (
    <S.Wrapper>
      <HeaderSignUp />
      <S.SignUpWrapper>
        <S.Title>알바시대 회원가입을 환영합니다.</S.Title>
        <S.Card>
          <S.ImageContainer>
            <ProfileImage />
          </S.ImageContainer>
          <S.CardTitle>개인 회원</S.CardTitle>
          <S.Explanation>일자리를 찾는 알바생</S.Explanation>
          <S.Button to="/signup/personal" type="personal">
            <S.Regist type="personal">개인회원 가입하기</S.Regist>
          </S.Button>
        </S.Card>
        <S.Card>
          <S.ImageContainer>
            <S.CompanyImage />
          </S.ImageContainer>
          <S.CardTitle>기업 회원</S.CardTitle>
          <S.Explanation>
            알바생을 구하는 사장님<br></br>(개인사업자, 사업체 직원 포함)
          </S.Explanation>
          <S.Button to="/signup/company" type="company">
            <S.Regist type="company">기업회원 가입하기</S.Regist>
          </S.Button>
        </S.Card>
      </S.SignUpWrapper>
    </S.Wrapper>
  );
};

export default SignUpSelection;
