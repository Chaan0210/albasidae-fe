import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as UOSLogo } from "../../images/UOSLogo.svg";

const S = {
  HeaderWrapper: styled.header`
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px 15px 25px;
  `,
  Title: styled.div`
    display: flex;
    font-size: 30px;
    font-weight: bold;
  `,
  Home: styled.div`
    font-size: 15px;
  `,
  Login: styled.div`
    font-size: 15px;
  `,
  Right: styled.div`
    display: flex;
    gap: 13px;
    align-items: center;
  `,
  Link: styled(Link)`
    color: inherit;
    text-decoration: none;
  `,
  Split: styled.div`
    color: grey;
    font-size: 23px;
    font-weight: lighter;
  `,
  UOSLogo: styled(UOSLogo)`
    width: 50px;
    height: 50px;
  `,
  Left: styled.div`
    display: flex;
    gap: 10px;
    padding-bottom: 5px;
  `,
};

const HeaderSignUp = () => {
  return (
    <S.HeaderWrapper>
      <S.Left>
        <S.Link to="/" className="link">
          <S.Title>알바시대</S.Title>
        </S.Link>
        <S.UOSLogo />
      </S.Left>

      <S.Right>
        <S.Link to="/" className="link">
          <S.Home>Home</S.Home>
        </S.Link>
        <S.Split>|</S.Split>
        <S.Link to="/login" className="link">
          <S.Login>로그인</S.Login>
        </S.Link>
      </S.Right>
    </S.HeaderWrapper>
  );
};

export default HeaderSignUp;
