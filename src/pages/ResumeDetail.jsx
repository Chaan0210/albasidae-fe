import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import S from "../uis/ResumeUI";
import { AuthContext } from "../components/auth/AuthContext";

const calculateAge = (birthDate) => {
  if (birthDate && !isNaN(birthDate)) {
    const yearPrefix =
      parseInt(birthDate.slice(0, 2), 10) <= new Date().getFullYear() % 100
        ? 2000
        : 1900;
    const year = yearPrefix + parseInt(birthDate.slice(0, 2), 10);
    const month = parseInt(birthDate.slice(2, 4), 10) - 1;
    const day = parseInt(birthDate.slice(4, 6), 10);
    const birth = new Date(year, month, day);
    const ageDifMs = Date.now() - birth.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  return null;
};

const ResumeDetail = () => {
  const { email } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [resume, setResume] = useState([]);
  const getTranslatedWorkTerm = (term) => {
    switch (term) {
      case "under_three_month":
        return "3개월 이하";
      case "three_six_month":
        return "3개월~6개월";
      case "six_one_year":
        return "6개월~1년";
      case "over_one_year":
        return "1년 이상";
      case "regardless":
        return "기간 무관";
      default:
        return term;
    }
  };
  const getTranslatedWorkDays = (days) => {
    switch (days) {
      case "weekdays":
        return "평일";
      case "weekend":
        return "주말";
      case "regardless":
        return "요일 무관";
      default:
        return days;
    }
  };

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/resumes/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch resume data");
        }
        const responseData = await response.json();
        setResume(responseData.data);
      } catch (error) {
        console.error("Fail to fetch: ", error);
        alert("Resume data could not be retrieved.");
      }
    };
    fetchResumeData();
  }, [id]);

  const handleDelete = async () => {
    const confirmation = window.confirm("이력서를 삭제하시겠습니까?");
    if (!confirmation) return;
    try {
      const response = await fetch(
        `http://localhost:8080/api/resumes/${id}?email=${encodeURIComponent(
          email
        )}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("이력서가 삭제되었습니다.");
        navigate("/resume");
      } else {
        const data = await response.json();
        alert(data.message || "Failed to delete the resume post.");
      }
    } catch (error) {
      console.error("Error deleting resume post: ", error);
      alert("An error occurred while trying to delete the resume post.");
    }
  };

  const handleEdit = () => {
    navigate(`/editresume/${id}`, { state: { resume } });
  };

  return (
    <>
      <Header />
      <S.DetailPageFrame>
        <S.InfoContainerColumn>
          {email && email === resume.personal?.email && (
            <S.ButtonGroup>
              <S.EditButton onClick={handleEdit}>이력서 수정</S.EditButton>
              <S.DeleteButton onClick={handleDelete}>
                이력서 삭제
              </S.DeleteButton>
            </S.ButtonGroup>
          )}
          <S.ResumeDetailTitle>{resume?.resumeTitle}</S.ResumeDetailTitle>

          <S.ResumeDetailProfile>
            <S.ResumeDetailProfileImage>
              {resume.personal?.image ? (
                <img src={resume.personal.image} alt={"ProfileImage"} />
              ) : (
                <S.ProfileImage_2 />
              )}
            </S.ResumeDetailProfileImage>
            <S.InfoContainerColumn>
              <S.InfoRow>
                <S.Content>
                  {resume.personal?.name +
                    " " +
                    "(" +
                    resume.personal?.gender +
                    ")" +
                    " " +
                    calculateAge(resume.personal?.birthDate) +
                    "세"}
                </S.Content>
              </S.InfoRow>
              <S.InfoRow>
                <S.Label>{"연락처"}</S.Label>
                <S.Content>{resume.personal?.phone}</S.Content>
              </S.InfoRow>
              <S.InfoRow>
                <S.Label>{"이메일"}</S.Label>
                <S.Content>{resume.personal?.email}</S.Content>
              </S.InfoRow>
            </S.InfoContainerColumn>
          </S.ResumeDetailProfile>
          <S.ResumeDetailTitle>{"학력"}</S.ResumeDetailTitle>
          <S.InfoContainerColumn>
            <S.InfoRow>{resume?.educationLevel}</S.InfoRow>
          </S.InfoContainerColumn>
          <S.ResumeDetailTitle>{"경력"}</S.ResumeDetailTitle>
          <S.InfoContainerColumn>
            <S.InfoRow>{resume?.career}</S.InfoRow>
          </S.InfoContainerColumn>
          <S.ResumeDetailTitle>{"희망근무 조건"}</S.ResumeDetailTitle>
          <S.InfoContainerColumn>
            <S.InfoRow>
              <S.Label>{"근무기간"}</S.Label>
              <S.Content>{getTranslatedWorkTerm(resume?.workPeriod)}</S.Content>
            </S.InfoRow>
            <S.InfoRow>
              <S.Label>{"근무요일"}</S.Label>
              <S.Content>{getTranslatedWorkDays(resume?.workDays)}</S.Content>
            </S.InfoRow>
            <S.InfoRow>
              <S.Label>{"근무형태"}</S.Label>
              <S.Content>
                {resume?.employmentTypes
                  ? resume?.employmentTypes.join(", ")
                  : "N/A"}
              </S.Content>
            </S.InfoRow>
            <S.InfoRow>
              <S.Label>{"근무지"}</S.Label>
              <S.Content>
                {resume?.preferredWorkLocation
                  ? resume?.preferredWorkLocation.join(", ")
                  : "N/A"}
              </S.Content>
            </S.InfoRow>
            <S.InfoRow>
              <S.Label>{"근무형태"}</S.Label>
              <S.Content>
                {resume?.preferredJobTypes
                  ? resume?.preferredJobTypes.join(", ")
                  : "N/A"}
              </S.Content>
            </S.InfoRow>
          </S.InfoContainerColumn>
          <S.ResumeDetailTitle>{"자기소개서"}</S.ResumeDetailTitle>
          <S.InfoContainerColumn>
            <S.InfoRow>{resume?.selfIntroduction}</S.InfoRow>
          </S.InfoContainerColumn>
        </S.InfoContainerColumn>
      </S.DetailPageFrame>
    </>
  );
};

export default ResumeDetail;
