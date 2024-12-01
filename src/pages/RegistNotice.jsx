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
import Workplace from "../components/RegistNotice/Workplace";
import ResumeProfile from "../components/RegistResume/ResumeProfile";
import WorkAddress from "../components/RegistNotice/WorkAddress";
import { AuthContext } from "../components/auth/AuthContext";

const RegistNotice = () => {
  const navigate = useNavigate();
  const { isLoggedIn, role, email } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    noticeTitle: "Default",
    noticeCompanyName: "Company_default",
    noticeCompanyContent: "Content_default",
    noticeCompanyImage: "",
    peopleNum: 1,
    workCategory: ["외식, 음료"],
    workType: ["아르바이트"],
    noticeCareer: "any",
    workTerm: "under_three_month",
    workDays: ["월요일"],
    workTime: "1~23",
    workPay: "시급 12000",
    gender: "any",
    age: "any",
    deadline: "상시모집",
    submitMethod: ["온라인지원"],
    place: "휘경동",
    address: "서울 동대문구 망우로 74",
  });

  useEffect(() => {
    if (!isLoggedIn) {
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
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  };

  const handleSubmit = async () => {
    const newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (
        key !== "noticeCompanyImage" &&
        (value === "" || value.length === 0)
      ) {
        newErrors[key] = "모든 필드를 입력해주세요.";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("companyImage", formData.noticeCompanyImage);

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
      placeDetail: formData.address,
    };
    formDataToSend.append(
      "jobPost",
      new Blob([JSON.stringify(jobPostData)], { type: "application/json" })
    );

    try {
      const response = await fetch(
        `http://localhost:8080/api/job-posts?email=${encodeURIComponent(
          email
        )}`,
        {
          method: "POST",
          body: formDataToSend,
          mode: "cors",
        }
      );
      const data = await response.json();
      if (response.ok && data.result === true) {
        alert("공고 등록이 완료되었습니다.");
        navigate("/");
      } else {
        alert(data.message || "공고 등록에 실패했습니다.");
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
          <S.SubTitle>업무내용</S.SubTitle>
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
          <S.SubTitle>근무 상세주소</S.SubTitle>
          <S.ComponentWrapper>
            <WorkAddress
              value={formData.address}
              onChange={handleChange("address")}
            />
            {errors.address && (
              <S.ErrorMessage>{errors.address}</S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무처 사진</S.SubTitle>
          <S.ComponentWrapper>
            <NoticeCompanyImage
              value={formData.noticeCompanyImage}
              onChange={handleChange("noticeCompanyImage")}
            />
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

        <S.NoticeSubmitButton onClick={handleSubmit}>
          공고 작성 완료
        </S.NoticeSubmitButton>
      </S.MainContainer>
    </S.Wrapper>
  );
};

export default RegistNotice;
