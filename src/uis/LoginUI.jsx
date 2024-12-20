// 로그인 관련 컴포넌트에서 레이아웃과 디자인을 정의하는 스타일 컴포넌트

import styled from "styled-components";
import { Link } from "react-router-dom";

const S = {
  Wrapper: styled.div``,
  Container: styled.div`
    max-width: 500px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 50px auto;
    padding: 20px 35px 20px 35px;
  `,
  Title: styled.div`
    font-size: 27px;
    text-align: center;
    font-weight: bold;
    padding: 10px 0 7px 0;
    white-space: nowrap;
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
    transition: all 0.3s ease;

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
    transition: all 0.3s ease;

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
    color: ${({ activeTab }) => (activeTab === "personal" ? "black" : "white")};
    font-size: 18px;
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
  ErrorMessage: styled.div`
    color: red;
    font-size: 14px;
    text-align: center;
    padding-bottom: 10px;
  `,
};

export default S;
