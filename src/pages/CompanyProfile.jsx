import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import S from "../uis/CompanyProfileUI";
import Header from "../components/Header";
import UserInfo from "../components/Profile/UserInfo";
import { AuthContext } from "../components/auth/AuthContext";

const CompanyProfile = () => {
  const { isLoggedIn, role } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else if (role !== "COMPANY" && role !== "ADMIN") {
      alert("이 페이지에 접근할 권한이 없습니다.");
      navigate("/");
    }
  }, [isLoggedIn, role, navigate]);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Container>
          <S.TopComponent>
            <S.ProfileContainer>
              <UserInfo />
            </S.ProfileContainer>

            <S.ContentContainer onClick={() => handleNavigate("/job")}>
              <S.PaperPlaneIcon />
              공고지원현황
            </S.ContentContainer>
            <S.ContentContainer onClick={() => handleNavigate("/resume")}>
              <S.GlassesIcon />
              이력서 둘러보기
            </S.ContentContainer>
          </S.TopComponent>

          <S.BottomContainer>
            내 공고목록
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </S.BottomContainer>
          <S.BottomContainer>
            공고지원현황
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </S.BottomContainer>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default CompanyProfile;
