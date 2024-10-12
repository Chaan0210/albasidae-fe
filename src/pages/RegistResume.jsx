import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import S from "../uis/RegistUI";
import HeaderRegist from "../components/HeaderRegist";
import ResumeProfile from "../components/RegistResume/ResumeProfile";
import ResumeEducation from "../components/RegistResume/ResumeEducation";
import ResumeTitle from "../components/RegistResume/ResumeTitle";
import ResumeCareer from "../components/RegistResume/ResumeCareer";
import Workplace from "../components/RegistResume/Workplace";
import WorkCategory from "../components/RegistResume/WorkCategory";
import WorkType from "../components/RegistResume/WorkType";
import WorkTerm from "../components/RegistResume/WorkTerm";
import WorkDays from "../components/RegistResume/WorkDays";
import SelfIntroduce from "../components/RegistResume/SelfIntroduce";
import { AuthContext } from "../components/auth/AutContext";

const RegistResume = () => {
  const navigate = useNavigate();
  const { isLoggedIn, role } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    } else if (role !== ("PERSONAL" || "ADMIN")) {
      alert("이 페이지에 접근할 권한이 없습니다.");
      navigate("/");
    }
  }, [isLoggedIn, role, navigate]);

  return (
    <S.Wrapper>
      <HeaderRegist />
      <S.MainContainer>
        <S.Title>기본정보</S.Title>
        <ResumeProfile />

        <S.Title>이력서 제목</S.Title>
        <ResumeTitle />

        <S.Title>학력</S.Title>
        <ResumeEducation />

        <S.Title>경력</S.Title>
        <ResumeCareer />

        <S.Title>희망근무 조건</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>희망근무지</S.SubTitle>
          <Workplace />
        </S.SubTitleWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>희망업직종</S.SubTitle>
          <WorkCategory />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무형태&nbsp;&nbsp;&nbsp;&nbsp;</S.SubTitle>
          <WorkType />
        </S.SubTitleWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>근무기간&nbsp;&nbsp;&nbsp;&nbsp;</S.SubTitle>
          <WorkTerm />
        </S.SubTitleWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>근무요일&nbsp;&nbsp;&nbsp;&nbsp;</S.SubTitle>
          <WorkDays />
        </S.SubTitleWrapper>
        <S.Title>자기소개서</S.Title>
        <SelfIntroduce />

        <S.SubmitButton>이력서 작성 완료</S.SubmitButton>
      </S.MainContainer>
    </S.Wrapper>
  );
};

export default RegistResume;
