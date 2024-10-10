import React, { useState } from "react";
import styled from "styled-components";
import HeaderLogin from "../../components/auth/HeaderLogin";
import { Link } from "react-router-dom";

const S = {
  Wrapper: styled.div``,
  Container: styled.div`
    max-width: 500px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 50px auto;
    padding: 20px 35px 20px 35px;
  `,
  Title: styled.div`
    font-size: 27px;
    text-align: center;
    font-weight: bold;
    padding: 10px 0 7px 0;
  `,
  SubText: styled.div`
    font-size: 14px;
    text-align: center;
    color: #666;
    margin-bottom: 30px;
    a {
      color: #0070f3;
      text-decoration: underline;
      cursor: pointer;
    }
  `,
  TabWrapper: styled.div`
    display: flex;
    margin-bottom: 10px;
  `,
  TabLeft: styled.div`
    flex: 1;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 10px 0 0 10px;
    background-color: ${({ active }) => (active ? "#fff" : "#f7f7f7")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
  `,
  TabRight: styled.div`
    flex: 1;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
    border: 1px solid #ddd;
    border-left: none;
    border-radius: 0px 10px 10px 0px;
    background-color: ${({ active }) => (active ? "#fff" : "#f7f7f7")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
  `,
  InputWrapper: styled.div``,
  Input: styled.input`
    width: 96.5%;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 15px 0px 15px 15px;
    outline: none;
  `,

  LoginButton: styled.button`
    width: 100%;
    padding: 15px;
    background-color: ${({ activeTab }) =>
      activeTab === "personal" ? "#fdf25d" : "#5194f6"};
    border: 1px solid
      ${({ activeTab }) => (activeTab === "personal" ? "#fae04b" : "#2f6df6")};
    color: black;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      opacity: 0.8;
    }
  `,
  Link: styled(Link)`
    font-size: 14px;
    text-decoration: none;
    color: inherit;
  `,
  Bottom: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 40px 10px 40px;
  `,
  Split: styled.div`
    color: #ddd;
    font-size: 14px;
  `,
};

const Login = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <S.Wrapper>
      <HeaderLogin />
      <S.Container>
        <S.Title>로그인 후 다양한 서비스를 이용해 보세요.</S.Title>
        <S.SubText>
          아직 알바시대 회원이 아니시라면, 지금 <a href="/signup">회원가입</a>을
          해주세요.
        </S.SubText>

        <S.TabWrapper>
          <S.TabLeft
            active={activeTab === "personal"}
            onClick={() => setActiveTab("personal")}
          >
            개인회원 <br />
            (일자리 찾기)
          </S.TabLeft>
          <S.TabRight
            active={activeTab === "company"}
            onClick={() => setActiveTab("company")}
          >
            기업회원 <br />
            (알바생 찾기)
          </S.TabRight>
        </S.TabWrapper>

        <S.InputWrapper>
          <S.Input type="text" placeholder="아이디" />
          <S.Input type="password" placeholder="비밀번호" />
        </S.InputWrapper>

        <S.LoginButton activeTab={activeTab}>로그인</S.LoginButton>

        <S.Bottom>
          <S.Link to="/signup">회원가입</S.Link>
          <S.Split>|</S.Split>
          <S.Link to="/find-id">아이디 찾기</S.Link>
          <S.Split>|</S.Split>
          <S.Link to="/find-password">비밀번호 찾기</S.Link>
        </S.Bottom>
      </S.Container>
    </S.Wrapper>
  );
};

export default Login;
