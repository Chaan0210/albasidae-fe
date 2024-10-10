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
  Subtitle: styled.div`
    font-size: 17px;
    font-weight: bold;
    text-align: start;
    padding-bottom: 10px;
  `,
  Input: styled.input`
    width: 96.5%;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 15px 0px 15px 15px;
    outline: none;
  `,
  MultiWrapper: styled.div`
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
    font-size: 16px;
    outline: none;
    padding: 15px 0px 15px 5px;
  `,
  Button: styled.button`
    width: 100%;
    padding: 15px;
    font-size: 16px;
    border-radius: 10px;
    font-weight: bold;
    color: ${({ activeTab }) => (activeTab === "personal" ? "black" : "white")};
    background-color: ${({ activeTab }) =>
      activeTab === "personal" ? "#fdf25d" : "#5194f6"};
    border: 1px solid
      ${({ activeTab }) => (activeTab === "personal" ? "#fae04b" : "#2f6df6")};
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
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
  RadioWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: #f7f7f7;
    padding: 15px;
  `,
  RadioLabel: styled.label`
    margin: 0 20px;
    font-size: 16px;
  `,
  RadioInput: styled.input`
    margin-right: 5px;
  `,
};

const FindID = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [searchBy, setSearchBy] = useState("phone");

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
            <S.RadioWrapper>
              <S.RadioLabel>
                <S.RadioInput
                  type="radio"
                  name="searchBy"
                  value="phone"
                  checked={searchBy === "phone"}
                  onChange={() => setSearchBy("phone")}
                />
                휴대폰 번호
              </S.RadioLabel>
              <S.RadioLabel>
                <S.RadioInput
                  type="radio"
                  name="searchBy"
                  value="email"
                  checked={searchBy === "email"}
                  onChange={() => setSearchBy("email")}
                />
                이메일 주소
              </S.RadioLabel>
            </S.RadioWrapper>
            <S.MultiWrapper>
              <S.InputFirst type="text" placeholder="이름을 입력해주세요." />
              <S.InputSecond
                type="text"
                placeholder={
                  searchBy === "phone" ? "휴대폰(- 제외 번호 입력)" : "이메일"
                }
              />
            </S.MultiWrapper>
          </>
        ) : (
          <S.MultiWrapper>
            <S.InputFirst
              type="text"
              placeholder="사업자등록번호(- 제외 번호 입력)"
            />
            <S.InputFirst type="text" placeholder="담당자명" />
            <S.InputSecond type="text" placeholder="휴대폰(- 제외 번호 입력)" />
          </S.MultiWrapper>
        )}

        <S.Button activeTab={activeTab}>
          {activeTab === "personal"
            ? "개인회원 아이디 찾기"
            : "기업회원 아이디 찾기"}
        </S.Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default FindID;
