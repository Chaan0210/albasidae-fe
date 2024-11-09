import React from "react";
import S from "../uis/ProfileUI";
import Header from "../components/Header";
import UserInfo from "../components/Profile/UserInfo";

const Profile = () => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.TopWrapper>
          <S.ProfileContainer>
            <UserInfo />
          </S.ProfileContainer>
          <S.RightContainer>
            <S.ResumeContainer>작성된 이력서가 없습니다</S.ResumeContainer>
            <S.ContentWrapper>
              <S.ContentContainer>
                <S.PaperPlaneIcon />
                입사지원현황
              </S.ContentContainer>
              <S.ContentContainer>
                <S.ChatIcon />
                채팅문의&지원
              </S.ContentContainer>
              <S.ContentContainer>
                <S.GlassesIcon />
                이력서열람
              </S.ContentContainer>
              <S.ContentContainer>
                <S.PersonCheckIcon />
                채용제의기업
              </S.ContentContainer>
              <S.ContentContainer>
                <S.AlgorithmIcon />
                맞춤알바
              </S.ContentContainer>
            </S.ContentWrapper>
          </S.RightContainer>
        </S.TopWrapper>

        <S.BottomContainer>내 이력서</S.BottomContainer>
        <S.BottomContainer>지원현황</S.BottomContainer>
      </S.Wrapper>
    </>
  );
};

export default Profile;
