import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import S from "../uis/ProfileUI";
import Header from "../components/Header";
import UserInfo from "../components/Profile/UserInfo";
import TimeTable from "../components/Profile/TimeTable";
import { AuthContext } from "../components/auth/AuthContext";

const Profile = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

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
                  <S.ContentContainer>
                    <S.AlgorithmIcon />
                    맞춤알바
                  </S.ContentContainer>
                  <S.ContentContainer>
                    <S.PaperPlaneIcon />
                    입사지원현황
                  </S.ContentContainer>
                </S.ContentLeft>
                <S.ContentRight>
                  <S.ContentContainer>
                    <S.GlassesIcon />
                    이력서열람
                  </S.ContentContainer>
                  <S.ContentContainer>
                    <S.ResumeContainer />
                    ???
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

export default Profile;
