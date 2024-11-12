import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import S from "../uis/JobUI";
import { AuthContext } from "../components/auth/AuthContext";

const InfoRow = ({ label, content }) => (
  <S.InfoRow>
    <S.Label>{label}</S.Label>
    <S.Content>{content}</S.Content>
  </S.InfoRow>
);
const InfoContainer = ({ title, children }) => (
  <S.JobDetailContainer>
    <S.InfoTitle>{title}</S.InfoTitle>
    <S.InfoContainerColumn>{children}</S.InfoContainerColumn>
  </S.JobDetailContainer>
);

const JobDetail = () => {
  const navigate = useNavigate();
  const { email } = useContext(AuthContext) || {};
  const { id } = useParams();
  const [job, setJob] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [wageType, wage] = job.pay ? job.pay.split(" ") : ["", ""];
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
  const dayOrder = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];
  const sortDays = (days) => {
    if (!Array.isArray(days)) return [];
    return [...days].sort((a, b) => dayOrder.indexOf(a) - dayOrder.indexOf(b));
  };

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/job-posts/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }
        const responseData = await response.json();
        setJob(responseData.data);
      } catch (error) {
        console.error("Fail to fetch: ", error);
        setErrorMessage("Job data could not be retrieved.");
      }
    };
    fetchJobData();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/job-posts/${id}?email=${encodeURIComponent(
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
        alert("공고가 삭제되었습니다.");
        navigate("/job");
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Failed to delete the job post.");
      }
    } catch (error) {
      console.error("Error deleting job post: ", error);
      setErrorMessage("An error occurred while trying to delete the job post.");
    }
  };

  const handleEdit = () => {
    navigate(`/editjob/${id}`, { state: { job } });
  };

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <S.DetailPageFrame>
        <S.JobDetailContainer>
          <S.DetailCompanyName>{job.companyName}</S.DetailCompanyName>
          <S.DetailJobTitle>{job.title}</S.DetailJobTitle>
          {email && email === job.company?.email && (
            <S.ButtonGroup>
              <S.EditButton onClick={handleEdit}>공고 수정</S.EditButton>
              <S.DeleteButton onClick={handleDelete}>공고 삭제</S.DeleteButton>
            </S.ButtonGroup>
          )}
        </S.JobDetailContainer>
        <S.JobDetailContainer>
          <S.InfoContainerRow>
            <S.InfoColumn>
              <S.Label>{wageType}</S.Label>
              <S.Content>{wage}</S.Content>
            </S.InfoColumn>
            <S.InfoColumn>
              <S.Label>{"기간"}</S.Label>
              <S.Content>{getTranslatedWorkTerm(job.workTerm)}</S.Content>
            </S.InfoColumn>
            <S.InfoColumn>
              <S.Label>{"요일"}</S.Label>
              <S.Content>{sortDays(job.workDays).join(", ")}</S.Content>
            </S.InfoColumn>
            <S.InfoColumn>
              <S.Label>{"시간"}</S.Label>
              <S.Content>
                {job.workTime === "any" ? "시간협의" : `${job.workTime}시`}
              </S.Content>
            </S.InfoColumn>
          </S.InfoContainerRow>
        </S.JobDetailContainer>
        <InfoContainer title="모집조건">
          <InfoRow label="모집기간" content={job.deadline} />
          <InfoRow label="모집인원" content={job.peopleNum} />
        </InfoContainer>
        <InfoContainer title="근무지 정보">
          <InfoRow label="근무지명" content={job.companyName} />
          <InfoRow label="근무지" content={job.place} />
        </InfoContainer>
        <InfoContainer title="근무조건">
          <InfoRow label="급여" content={job.pay} />
          <InfoRow
            label="근무기간"
            content={getTranslatedWorkTerm(job.workTerm)}
          />
          <InfoRow
            label="근무시간"
            content={job.workTime === "any" ? "시간협의" : `${job.workTime}시`}
          />
        </InfoContainer>
        <S.JobDetailContainer>
          <S.InfoTitle>{"상세 모집내용"}</S.InfoTitle>
          <S.CompanyImage src={job.companyImage} />
        </S.JobDetailContainer>
        <S.JobDetailContainer>
          <S.InfoTitle>{"지원방법"}</S.InfoTitle>
        </S.JobDetailContainer>
        <S.JobDetailContainer>
          <S.InfoTitle>{"기업정보"}</S.InfoTitle>
        </S.JobDetailContainer>
      </S.DetailPageFrame>
    </>
  );
};

export default JobDetail;
