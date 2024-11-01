import React, { useContext, useEffect, useState } from "react";
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
import { AuthContext } from "../components/auth/AuthContext";

const RegistResume = () => {
  const navigate = useNavigate();
  const { isLoggedIn, role } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    education: "",
    career: "",
    place: [],
    category: [],
    type: [],
    term: "",
    days: "",
    selfIntroduction: "",
  });

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    } else if (role !== ("PERSONAL" || "ADMIN")) {
      alert("이 페이지에 접근할 권한이 없습니다.");
      navigate("/");
    }
  }, [isLoggedIn, role, navigate]);

  const handleChange = (field) => (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <S.Wrapper>
      <HeaderRegist />
      <S.MainContainer>
        <S.Title>기본정보</S.Title>
        <ResumeProfile />

        <S.Title>이력서 제목</S.Title>
        <ResumeTitle value={formData.title} onChange={handleChange("title")} />

        <S.Title>학력</S.Title>
        <ResumeEducation
          value={formData.education}
          onChange={handleChange("education")}
        />

        <S.Title>경력</S.Title>
        <ResumeCareer
          value={formData.career}
          onChange={handleChange("career")}
        />

        <S.Title>희망근무 조건</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>희망근무지</S.SubTitle>
          <Workplace value={formData.place} onChange={handleChange("place")} />
        </S.SubTitleWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>희망업직종</S.SubTitle>
          <WorkCategory
            value={formData.category}
            onChange={handleChange("category")}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무형태&nbsp;&nbsp;&nbsp;&nbsp;</S.SubTitle>
          <WorkType value={formData.type} onChange={handleChange("type")} />
        </S.SubTitleWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>근무기간&nbsp;&nbsp;&nbsp;&nbsp;</S.SubTitle>
          <WorkTerm value={formData.term} onChange={handleChange("term")} />
        </S.SubTitleWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>근무요일&nbsp;&nbsp;&nbsp;&nbsp;</S.SubTitle>
          <WorkDays value={formData.days} onChange={handleChange("days")} />
        </S.SubTitleWrapper>
        <S.Title>자기소개서</S.Title>
        <SelfIntroduce
          value={formData.selfIntroduction}
          onChange={handleChange("selfIntroduction")}
        />

        <S.SubmitButton onClick={handleSubmit}>이력서 작성 완료</S.SubmitButton>
      </S.MainContainer>
    </S.Wrapper>
  );
};

export default RegistResume;
