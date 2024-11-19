import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

const EditResume = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, role, email } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    education: "",
    career: "",
    place: [],
    workCategory: [],
    workType: [],
    term: "",
    days: "",
    selfIntroduction: "",
  });

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else if (role !== "PERSONAL" && role !== "ADMIN") {
      alert("이 페이지에 접근할 권한이 없습니다.");
      navigate("/");
    } else if (location.state?.resume) {
      setFormData({
        title: location.state.resume.resumeTitle,
        education: location.state.resume.educationLevel,
        career: location.state.resume.career,
        place: location.state.resume.preferredWorkLocation,
        workCategory: location.state.resume.employmentTypes,
        workType: location.state.resume.preferredJobTypes,
        term: location.state.resume.workPeriod,
        days: location.state.resume.workDays,
        selfIntroduction: location.state.resume.selfIntroduction,
      });
    }
  }, [isLoggedIn, role, navigate, location.state]);

  const handleChange = (field) => (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  };

  const handleSubmit = async () => {
    const newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (value === "" || (Array.isArray(value) && value.length === 0)) {
        newErrors[key] = "모든 필드를 입력해주세요.";
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const requestBody = {
      id: location.state.resume.id,
      resumeTitle: formData.title,
      selfIntroduction: formData.selfIntroduction,
      educationLevel: formData.education,
      preferredWorkLocation: formData.place,
      preferredJobTypes: formData.workType,
      employmentTypes: formData.workCategory,
      workPeriod: formData.term,
      workDays: formData.days,
      user: [],
    };

    try {
      const response = await fetch(
        `http://localhost:8080/api/resumes/${
          location.state.resume.id
        }?email=${encodeURIComponent(email)}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
          mode: "cors",
        }
      );
      const data = await response.json();
      if (response.ok && data.result === true) {
        alert("이력서 수정이 완료되었습니다.");
        navigate("/");
      } else {
        alert(data.message || "이력서 수정에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return (
    <S.Wrapper>
      <HeaderRegist />
      <S.MainContainer>
        <S.Title>기본정보</S.Title>
        <ResumeProfile />

        <S.Title>이력서 제목</S.Title>
        <S.ComponentWrapper>
          <ResumeTitle
            value={formData.title}
            onChange={handleChange("title")}
          />
          {errors.title && <S.ErrorMessage>{errors.title}</S.ErrorMessage>}
        </S.ComponentWrapper>

        <S.Title>학력</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>최종학력</S.SubTitle>
          <S.ComponentWrapper>
            <ResumeEducation
              value={formData.education}
              onChange={handleChange("education")}
            />
            {errors.education && (
              <S.ErrorMessage>{errors.education}</S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.Title>경력</S.Title>
        <S.ComponentWrapper>
          <ResumeCareer
            value={formData.career}
            onChange={handleChange("career")}
          />
          {errors.career && <S.ErrorMessage>{errors.career}</S.ErrorMessage>}
        </S.ComponentWrapper>

        <S.Title>희망근무 조건</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>희망근무지</S.SubTitle>
          <S.ComponentWrapper>
            <Workplace
              value={formData.place}
              onChange={handleChange("place")}
            />
            {errors.place && <S.ErrorMessage>{errors.place}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>희망업직종</S.SubTitle>
          <S.ComponentWrapper>
            <WorkCategory
              value={formData.workCategory}
              onChange={handleChange("workCategory")}
            />
            {errors.workCategory && (
              <S.ErrorMessage>{errors.workCategory}</S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무형태</S.SubTitle>
          <S.ComponentWrapper>
            <WorkType
              value={formData.workType}
              onChange={handleChange("workType")}
            />
            {errors.workType && (
              <S.ErrorMessage>{errors.workType}</S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>근무기간</S.SubTitle>
          <S.ComponentWrapper>
            <WorkTerm value={formData.term} onChange={handleChange("term")} />
            {errors.term && (
              <S.ErrorMessage style={{ marginLeft: "75px" }}>
                {errors.term}
              </S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>근무요일</S.SubTitle>
          <S.ComponentWrapper>
            <WorkDays value={formData.days} onChange={handleChange("days")} />
            {errors.days && (
              <S.ErrorMessage style={{ marginLeft: "75px" }}>
                {errors.days}
              </S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>
        <S.Title>자기소개서</S.Title>
        <S.ComponentWrapper>
          <SelfIntroduce
            value={formData.selfIntroduction}
            onChange={handleChange("selfIntroduction")}
          />
          {errors.selfIntroduction && (
            <S.ErrorMessage>{errors.selfIntroduction}</S.ErrorMessage>
          )}
        </S.ComponentWrapper>

        <S.SubmitButton onClick={handleSubmit}>이력서 수정 완료</S.SubmitButton>
      </S.MainContainer>
    </S.Wrapper>
  );
};

export default EditResume;
