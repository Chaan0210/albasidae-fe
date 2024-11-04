import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import S from "../uis/RegistUI";
import HeaderRegist from "../components/HeaderRegist";
import Age from "../components/RegistNotice/Age";
import Deadline from "../components/RegistNotice/Deadline";
import Gender from "../components/RegistNotice/Gender";
import NoticeCareer from "../components/RegistNotice/NoticeCareer";
import NoticeCompanyContent from "../components/RegistNotice/NoticeCompanyContent";
import NoticeCompanyImage from "../components/RegistNotice/NoticeCompanyImage";
import NoticeCompanyName from "../components/RegistNotice/NoticeCompanyName";
import NoticeTitle from "../components/RegistNotice/NoticeTitle";
import PeopleNum from "../components/RegistNotice/PeopleNum";
import SubmitMethod from "../components/RegistNotice/SubmitMethod";
import WorkCategory from "../components/RegistNotice/WorkCategory";
import WorkDays from "../components/RegistNotice/WorkDays";
import WorkPay from "../components/RegistNotice/WorkPay";
import WorkTerm from "../components/RegistNotice/WorkTerm";
import WorkTime from "../components/RegistNotice/WorkTime";
import WorkType from "../components/RegistNotice/WorkType";
import ResumeProfile from "../components/RegistResume/ResumeProfile";
import { AuthContext } from "../components/auth/AuthContext";
import Workplace from "../components/RegistResume/Workplace";

const RegistNotice = () => {
  const navigate = useNavigate();
  const { isLoggedIn, role } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    noticeTitle: "",
    noticeCompanyName: "",
    noticeCompanyContent: "",
    noticeCompanyImage: null,
    peopleNum: "",
    workCategory: [],
    workType: [],
    noticeCareer: "",
    workTerm: "",
    workDays: [],
    workTime: "",
    workPay: "",
    gender: "",
    age: "",
    deadline: "",
    submitMethod: [],
    place: [],
  });

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    } else if (role !== "COMPANY" && role !== "ADMIN") {
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
    alert("공고 등록이 완료되었습니다.");
    navigate("/");
  };

  return (
    <S.Wrapper>
      <HeaderRegist />
      <S.MainContainer>
        <S.Title>담당자 정보</S.Title>
        <ResumeProfile />
        <S.Title>근무처 정보</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>공고제목</S.SubTitle>
          <NoticeTitle
            value={formData.noticeTitle}
            onChange={handleChange("noticeTitle")}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무회사</S.SubTitle>
          <NoticeCompanyName
            value={formData.noticeCompanyName}
            onChange={handleChange("noticeCompanyName")}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>주요 사업내용</S.SubTitle>
          <NoticeCompanyContent
            value={formData.noticeCompanyContent}
            onChange={handleChange("noticeCompanyContent")}
          />
        </S.SubTitleWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>근무 장소</S.SubTitle>
          <Workplace value={formData.place} onChange={handleChange("place")} />
        </S.SubTitleWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>근무처 사진</S.SubTitle>
          <NoticeCompanyImage
            value={formData.noticeCompanyImage}
            onChange={handleChange}
            name="noticeCompanyImage"
          />
        </S.SubTitleWrapper>

        <S.Title>모집 내용</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>모집직종</S.SubTitle>
          <WorkCategory
            value={formData.workCategory}
            onChange={handleChange("workCategory")}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>고용형태</S.SubTitle>
          <WorkType
            value={formData.workType}
            onChange={handleChange("workType")}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>모집인원</S.SubTitle>
          <PeopleNum
            value={formData.peopleNum}
            onChange={handleChange("peopleNum")}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>
            &nbsp;&nbsp;&nbsp;&nbsp;경력&nbsp;&nbsp;&nbsp;
          </S.SubTitle>
          <NoticeCareer
            value={formData.noticeCareer}
            onChange={handleChange("noticeCareer")}
          />
        </S.SubTitleWrapper>

        <S.Title>근무조건</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>근무기간</S.SubTitle>
          <WorkTerm
            value={formData.workTerm}
            onChange={handleChange("workTerm")}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무요일</S.SubTitle>
          <WorkDays
            value={formData.workDays}
            onChange={handleChange("workDays")}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무시간</S.SubTitle>
          <WorkTime
            value={formData.workTime}
            onChange={handleChange("workTime")}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>
            &nbsp;&nbsp;&nbsp;급여&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </S.SubTitle>
          <WorkPay
            value={formData.workPay}
            onChange={handleChange("workPay")}
          />
        </S.SubTitleWrapper>

        <S.Title>자격조건</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>성별</S.SubTitle>
          <Gender value={formData.gender} onChange={handleChange("gender")} />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>연령</S.SubTitle>
          <Age value={formData.age} onChange={handleChange("age")} />
        </S.SubTitleWrapper>

        <S.Title>접수내용</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>모집마감일</S.SubTitle>
          <Deadline
            value={formData.deadline}
            onChange={handleChange("deadline")}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>지원방법</S.SubTitle>
          <SubmitMethod
            value={formData.submitMethod}
            onChange={handleChange("submitMethod")}
          />
        </S.SubTitleWrapper>

        <S.SubmitButton onClick={handleSubmit}>공고 작성 완료</S.SubmitButton>
      </S.MainContainer>
    </S.Wrapper>
  );
};

export default RegistNotice;
