import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import S from "../uis/JobUI";
import { AuthContext } from "../components/auth/AuthContext";
import Modal from "../components/Job/Modal";

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
  const { email, role } = useContext(AuthContext) || {};
  const { id } = useParams();
  const [job, setJob] = useState({}); // 빈 객체로 초기화하여 안전하게 참조 가능하게 설정
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [wageType, wage] = job.pay?.split(" ") || ["", ""]; // 옵셔널 체이닝과 기본값을 설정하여 오류 방지

  // 근무 기간 번역 함수
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

  // 요일 정렬 함수
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

  // 공고 데이터 가져오기
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
        setJob(responseData.data || {}); // 빈 객체로 초기화하여 오류 방지
      } catch (error) {
        console.error("Fail to fetch: ", error);
        setErrorMessage("Job data could not be retrieved.");
      }
    };
    fetchJobData();
  }, [id]);

  // 에러 메시지가 있을 경우 모달을 닫음
  useEffect(() => {
    if (errorMessage) {
      setShowModal(false);
    }
  }, [errorMessage]);

  // 공고 삭제 함수
  const handleDelete = async () => {
    const confirmation = window.confirm("공고를 삭제하시겠습니까?");
    if (!confirmation) return;
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

  // 공고 수정 함수
  const handleEdit = () => {
    navigate(`/editjob/${id}`, { state: { job } });
  };

  // 알바 지원 함수
  const handleSubmit = async () => {
    setErrorMessage("");
    try {
      const response = await fetch(
        `http://localhost:8080/api/job-applications/apply/${id}?email=${encodeURIComponent(
          email
        )}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
        }
      );
      if (response.ok) {
        alert("알바 지원 성공!");
        navigate(0);
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Failed to apply the job.");
      }
    } catch (error) {
      console.error("Error applying: ", error);
      setErrorMessage("An error occurred while trying to apply the job.");
    }
  };

  return (
    <>
      <Header />
      <S.DetailPageFrame>
        <S.JobDetailContainer>
          {email && email === job.company?.email && (
            <S.ButtonGroup>
              <S.EditButton onClick={handleEdit}>공고 수정</S.EditButton>
              <S.DeleteButton onClick={handleDelete}>공고 삭제</S.DeleteButton>
            </S.ButtonGroup>
          )}
          <S.DetailCompanyName>{job.companyName}</S.DetailCompanyName>
          <S.DetailJobTitle>{job.title}</S.DetailJobTitle>
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
              <S.Content>{sortDays(job.workDays)?.join(", ")}</S.Content>
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
          {job.companyImage && <S.CompanyImage src={job.companyImage} />}
          <S.Content>{job.description || "상세 내용 없음"}</S.Content>
        </S.JobDetailContainer>

        <S.JobDetailContainer>
          <S.InfoTitle>{"지원방법"}</S.InfoTitle>
          <S.Content>
            {job.applyMethod || "지원 방법에 대한 정보가 없습니다."}
          </S.Content>
        </S.JobDetailContainer>

        <S.JobDetailContainer>
          <S.InfoTitle>{"기업정보"}</S.InfoTitle>
          <S.Content>{job.companyInfo || "기업 정보가 없습니다."}</S.Content>
        </S.JobDetailContainer>

        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}

        {role === "PERSONAL" && (
          <>
            <S.SubmitButton onClick={() => setShowModal(true)}>
              알바 지원하기
            </S.SubmitButton>
            <Modal
              show={showModal}
              onClose={() => setShowModal(false)}
              onConfirm={handleSubmit}
              title={job.title}
              name={job.companyName}
            />
          </>
        )}
      </S.DetailPageFrame>
    </>
  );
};

export default JobDetail;
