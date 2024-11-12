import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import S from "../uis/ProfileUI";
import Header from "../components/Header";
import UserInfo from "../components/Profile/UserInfo";
import TimeTable from "../components/Profile/TimeTable";
import { AuthContext } from "../components/auth/AuthContext";

const PersonalProfile = () => {
  const { isLoggedIn, role } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else if (role !== "PERSONAL" && role !== "ADMIN") {
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
        <S.TopWrapper>
          <S.Left>
            <S.TopLeft>
              <S.ProfileContainer>
                <UserInfo />
              </S.ProfileContainer>

              <S.ContentWrapper>
                <S.ContentLeft>
                  <S.ContentContainer onClick={() => handleNavigate("/job")}>
                    <S.AlgorithmIcon />
                    맞춤알바
                  </S.ContentContainer>
                  <S.ContentContainer onClick={() => handleNavigate("/")}>
                    <S.PaperPlaneIcon />
                    입사지원현황
                  </S.ContentContainer>
                </S.ContentLeft>
                <S.ContentRight>
                  <S.ContentContainer onClick={() => handleNavigate("/resume")}>
                    <S.GlassesIcon />
                    이력서열람
                  </S.ContentContainer>
                  <S.ContentContainer>
                    <S.UOSLogo />
                  </S.ContentContainer>
                </S.ContentRight>
              </S.ContentWrapper>
            </S.TopLeft>
            <S.BottomContainer>
              내 이력서
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
              지원현황
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
          </S.Left>

          <S.RightContainer>
            <TimeTable />
          </S.RightContainer>
        </S.TopWrapper>
      </S.Wrapper>
    </>
  );
};

export default PersonalProfile;
