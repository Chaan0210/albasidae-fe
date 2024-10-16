import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as UOSLogo } from "../images/UOSLogo.svg";
import { ReactComponent as SearchIcon } from "../images/SearchIcon.svg";
import { AuthContext } from "./auth/AutContext";

const S = {
  HeaderWrapper: styled.header`
    border-bottom: 1px solid #ddd;
  `,
  Header: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  `,
  Title: styled.div`
    white-space: nowrap;
    diplay: flex;
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 7px;
  `,
  Nav: styled.nav`
    white-space: nowrap;
    ul {
      display: flex;
      list-style: none;
      gap: 20px;
      margin: 0;
      padding: 0;
      font-size: 16px;
    }
    li {
      cursor: pointer;
    }
  `,
  HeaderButtons: styled.div`
    display: flex;
    gap: 10px;
  `,
  HeaderSearch: styled.div`
    padding: 5px;
    width: 50%;
  `,
  SearchContainer: styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 87px;
  `,
  SearchInput: styled.input`
    flex: 1;
    padding: 12px 300px 12px 20px;
    font-size: 16px;
    border-radius: 30px;
    border: 1px solid #ccc;
    outline: none;
    margin-right: 50px;
  `,
  SearchButton: styled.button`
    width: 50px;
    height: 50px;
    margin-left: 50px;
    background-color: #fdf25d;
    border-radius: 50%;
    border: 0.7px solid #fae04b;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    padding: 10px;
  `,
  Login: styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    &:hover {
      text-decoration: underline;
    }
  `,
  SignUp: styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    &:hover {
      text-decoration: underline;
    }
  `,
  Profile: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 2%;
    white-space: nowrap;
  `,
  Menu: styled.div`
    display: flex;
    padding: 15px;
    padding-left: 25px;
    border-top: 1px solid #ddd;
    justify-content: space-between;
    align-items: center;
  `,
  MainHeader: styled.div`
    padding: 10px;
    padding-left: 20px;
    padding-bottom: 3px;
  `,
  Link: styled(Link)`
    color: inherit;
    text-decoration: none;
  `,
  UOSLogo: styled(UOSLogo)`
    width: 50px;
    height: 50px;
  `,
  SearchIcon: styled(SearchIcon)`
    width: 25px;
    height: 25px;
  `,
  Left: styled.div`
    gap: 10px;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
    margin-right: 30px;
  `,
  Split: styled.div`
    color: #ddd;
    font-size: 16px;
  `,
  ResumeButton: styled.button`
    background-color: #fdf25d;
    border: 0.7px solid #fae04b;
    border-radius: 30px;
    padding: 10px 18px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    font-size: 16px;
    font-weight: bold;
    white-space: nowrap;
  `,
  NoticeButton: styled.button`
    background-color: #5194f6;
    border: 0.7px solid #2f6df6;
    border-radius: 30px;
    padding: 10px 18px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    font-size: 16px;
    font-weight: bold;
    white-space: nowrap;
    color: white;
  `,
};

const Header = () => {
  const { isLoggedIn, role, logout } = useContext(AuthContext);

  return (
    <S.HeaderWrapper>
      <S.MainHeader>
        <S.Profile>
          {isLoggedIn ? (
            <S.Login onClick={logout}>로그아웃</S.Login>
          ) : (
            <>
              <S.Link to="/login" className="link">
                <S.Login>로그인</S.Login>
              </S.Link>
              <S.Link to="/signup" className="link">
                <S.SignUp>회원가입</S.SignUp>
              </S.Link>
            </>
          )}
        </S.Profile>

        <S.Header>
          <S.Left>
            <S.Link to="/" className="link">
              <S.Title>알바시대</S.Title>
            </S.Link>
            <S.UOSLogo />
          </S.Left>
          <S.SearchContainer>
            <S.HeaderSearch>
              <S.SearchInput type="text" placeholder="검색" />
            </S.HeaderSearch>
            <S.SearchButton>
              <S.SearchIcon />
            </S.SearchButton>
          </S.SearchContainer>
        </S.Header>
      </S.MainHeader>

      <S.Menu>
        <S.Nav>
          <ul>
            <li>전체메뉴</li>
            <S.Split>|</S.Split>
            <li>
              <S.Link to="/job">채용정보</S.Link>
            </li>
            <li>
              <S.Link to="/resume">인재정보</S.Link>
            </li>
          </ul>
        </S.Nav>

        <S.HeaderButtons>
          {(!isLoggedIn || role === "PERSONAL") && (
            <S.Link to="/RegistResume">
              <S.ResumeButton>이력서 등록</S.ResumeButton>
            </S.Link>
          )}
          {(!isLoggedIn || role === "COMPANY") && (
            <S.Link to="/RegistNotice">
              <S.NoticeButton>공고 등록</S.NoticeButton>
            </S.Link>
          )}
        </S.HeaderButtons>
      </S.Menu>
    </S.HeaderWrapper>
  );
};

export default Header;
