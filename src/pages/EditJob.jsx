import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import Workplace from "../components/RegistNotice/Workplace";
import ResumeProfile from "../components/RegistResume/ResumeProfile";
import { AuthContext } from "../components/auth/AuthContext";

const EditJob = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, role, email } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    noticeTitle: "",
    noticeCompanyName: "",
    noticeCompanyContent: "",
    noticeCompanyImage: "",
    peopleNum: 0,
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
    place: "",
  });

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else if (role !== "COMPANY" && role !== "ADMIN") {
      alert("이 페이지에 접근할 권한이 없습니다.");
      navigate("/");
    } else if (location.state?.job) {
      setFormData({
        noticeTitle: location.state.job.title,
        noticeCompanyName: location.state.job.companyName,
        noticeCompanyContent: location.state.job.companyContent,
        noticeCompanyImage: location.state.job.companyImage,
        peopleNum: location.state.job.peopleNum,
        workCategory: location.state.job.workCategory,
        workType: location.state.job.workType,
        noticeCareer: location.state.job.career,
        workTerm: location.state.job.workTerm,
        workDays: location.state.job.workDays,
        workTime: location.state.job.workTime,
        workPay: location.state.job.pay,
        gender: location.state.job.gender,
        age: location.state.job.age,
        deadline: location.state.job.deadline,
        submitMethod: location.state.job.submitMethod,
        place: location.state.job.place,
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
      if (value === "" || value.length === 0) {
        newErrors[key] = "모든 필드를 입력해주세요.";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("updatedCompanyImage", formData.noticeCompanyImage);

    const jobPostData = {
      title: formData.noticeTitle,
      companyName: formData.noticeCompanyName,
      companyContent: formData.noticeCompanyContent,
      place: formData.place,
      workCategory: formData.workCategory,
      workType: formData.workType,
      peopleNum: formData.peopleNum,
      career: formData.noticeCareer,
      workTerm: formData.workTerm,
      workDays: formData.workDays,
      workTime: formData.workTime,
      pay: formData.workPay,
      gender: formData.gender,
      age: formData.age,
      deadline: formData.deadline,
      submitMethod: formData.submitMethod,
    };
    formDataToSend.append(
      "updatedJobPost",
      new Blob([JSON.stringify(jobPostData)], { type: "application/json" })
    );

    try {
      const response = await fetch(
        `http://localhost:8080/api/job-posts/${
          location.state.job.id
        }?email=${encodeURIComponent(email)}`,
        {
          method: "PUT",
          body: formDataToSend,
          mode: "cors",
        }
      );
      const data = await response.json();
      if (response.ok && data.result === true) {
        alert("공고 수정이 완료되었습니다.");
        navigate("/job");
      } else {
        alert(data.message || "공고 수정에 실패했습니다.");
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
        <S.Title>담당자 정보</S.Title>
        <S.ComponentWrapper>
          <ResumeProfile />
        </S.ComponentWrapper>
        <S.Title>근무처 정보</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>공고제목</S.SubTitle>
          <S.ComponentWrapper>
            <NoticeTitle
              value={formData.noticeTitle}
              onChange={handleChange("noticeTitle")}
            />
            {errors.noticeTitle && (
              <S.ErrorMessage>{errors.noticeTitle}</S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무회사</S.SubTitle>
          <S.ComponentWrapper>
            <NoticeCompanyName
              value={formData.noticeCompanyName}
              onChange={handleChange("noticeCompanyName")}
            />
            {errors.noticeCompanyName && (
              <S.ErrorMessage>{errors.noticeCompanyName}</S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>주요 사업내용</S.SubTitle>
          <S.ComponentWrapper>
            <NoticeCompanyContent
              value={formData.noticeCompanyContent}
              onChange={handleChange("noticeCompanyContent")}
            />
            {errors.noticeCompanyContent && (
              <S.ErrorMessage>{errors.noticeCompanyContent}</S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무 장소</S.SubTitle>
          <S.ComponentWrapper>
            <Workplace
              value={formData.place}
              onChange={handleChange("place")}
            />
            {errors.place && <S.ErrorMessage>{errors.place}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무처 사진</S.SubTitle>
          <S.ComponentWrapper>
            <NoticeCompanyImage
              value={formData.noticeCompanyImage}
              onChange={handleChange("noticeCompanyImage")}
            />
            {errors.noticeCompanyImage && (
              <S.ErrorMessage>{errors.noticeCompanyImage}</S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.Title>모집 내용</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>모집직종</S.SubTitle>
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
          <S.SubTitle>고용형태</S.SubTitle>
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
          <S.SubTitle>모집인원</S.SubTitle>
          <S.ComponentWrapper>
            <PeopleNum
              value={formData.peopleNum}
              onChange={handleChange("peopleNum")}
            />
            {errors.peopleNum && (
              <S.ErrorMessage>{errors.peopleNum}</S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>경력</S.SubTitle>
          <S.ComponentWrapper>
            <NoticeCareer
              value={formData.noticeCareer}
              onChange={handleChange("noticeCareer")}
            />
            {errors.noticeCareer && (
              <S.ErrorMessage>{errors.noticeCareer}</S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.Title>근무조건</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>근무기간</S.SubTitle>
          <S.ComponentWrapper>
            <WorkTerm
              value={formData.workTerm}
              onChange={handleChange("workTerm")}
            />
            {errors.workTerm && (
              <S.ErrorMessage style={{ marginLeft: "75px" }}>
                {errors.workTerm}
              </S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무요일</S.SubTitle>
          <S.ComponentWrapper>
            <WorkDays
              value={formData.workDays}
              onChange={handleChange("workDays")}
            />
            {errors.workDays && (
              <S.ErrorMessage>{errors.workDays}</S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무시간</S.SubTitle>
          <S.ComponentWrapper>
            <WorkTime
              value={formData.workTime}
              onChange={handleChange("workTime")}
            />
            {errors.workTime && (
              <S.ErrorMessage>{errors.workTime}</S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>급여</S.SubTitle>
          <S.ComponentWrapper>
            <WorkPay
              value={formData.workPay}
              onChange={handleChange("workPay")}
            />
            {errors.workPay && (
              <S.ErrorMessage>{errors.workPay}</S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.Title>자격조건</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>성별</S.SubTitle>
          <S.ComponentWrapper>
            <Gender value={formData.gender} onChange={handleChange("gender")} />
            {errors.gender && <S.ErrorMessage>{errors.gender}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>연령</S.SubTitle>
          <S.ComponentWrapper>
            <Age value={formData.age} onChange={handleChange("age")} />
            {errors.age && <S.ErrorMessage>{errors.age}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.Title>접수내용</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>모집마감일</S.SubTitle>
          <S.ComponentWrapper>
            <Deadline
              value={formData.deadline}
              onChange={handleChange("deadline")}
            />
            {errors.deadline && (
              <S.ErrorMessage>{errors.deadline}</S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>지원방법</S.SubTitle>
          <S.ComponentWrapper>
            <SubmitMethod
              value={formData.submitMethod}
              onChange={handleChange("submitMethod")}
            />
            {errors.submitMethod && (
              <S.ErrorMessage>{errors.submitMethod}</S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubmitButton onClick={handleSubmit}>공고 수정 완료</S.SubmitButton>
      </S.MainContainer>
    </S.Wrapper>
  );
};

export default EditJob;
