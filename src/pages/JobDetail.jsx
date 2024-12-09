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
  const [job, setJob] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [wageType, wage] = job.pay?.split(" ") || ["", ""];

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

  const getTranslatedCareer = (career) => {
    switch (career) {
      case "any":
        return "무관(신입/경력에 상관없이 모집)";
      case "experienced":
        return "경력";
      case "inexperienced":
        return "신입";
      default:
        return career;
    }
  };

  const getTranslatedGender = (gender) => {
    switch (gender) {
      case "any":
        return "성별 무관";
      case "male":
        return "남자";
      case "female":
        return "여자";
      default:
        return gender;
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
          `https://ee9a-222-109-143-220.ngrok-free.app/api/job-posts/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }
        const responseData = await response.json();
        setJob(responseData.data || {});
      } catch (error) {
        console.error("Fail to fetch: ", error);
        setErrorMessage("Job data could not be retrieved.");
      }
    };
    fetchJobData();
  }, [id]);

  useEffect(() => {
    if (errorMessage) {
      setShowModal(false);
    }
  }, [errorMessage]);

  const handleDelete = async () => {
    const confirmation = window.confirm("공고를 삭제하시겠습니까?");
    if (!confirmation) return;
    try {
      const response = await fetch(
        `https://ee9a-222-109-143-220.ngrok-free.app/api/job-posts/${id}?email=${encodeURIComponent(
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

  const handleSubmit = async (requestData) => {
    setErrorMessage("");
    try {
      const response = await fetch(
        `https://ee9a-222-109-143-220.ngrok-free.app/api/job-applications/apply/${id}?email=${encodeURIComponent(
          email
        )}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
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

  const handleApplicant = () => {
    navigate(`/applicants/${id}`);
  };

  return (
    <>
      <Header />
      <S.DetailPageFrame>
        <S.JobDetailContainer>
          {email && (email === job.company?.email || role === "ADMIN") && (
            <S.ButtonGroup>
              <S.EditButton onClick={handleEdit}>공고 수정</S.EditButton>
              <S.DeleteButton onClick={handleDelete}>공고 삭제</S.DeleteButton>
              <S.ApplicantButton onClick={handleApplicant}>
                지원자 리스트 보기
              </S.ApplicantButton>
            </S.ButtonGroup>
          )}
          <S.DetailCompanyName>{job.companyName}</S.DetailCompanyName>
          <S.DetailJobTitle>{job.title}</S.DetailJobTitle>
        </S.JobDetailContainer>

        <S.JobDetailContainer>
          <S.InfoContainerRow>
            <S.InfoColumn>
              <S.Label>{wageType}</S.Label>
              <S.Content>{wage}원</S.Content>
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

        <InfoContainer title="근무처 정보">
          <InfoRow label="근무회사명" content={job.companyName} />
          <InfoRow label="업무내용" content={job.companyContent} />
          <InfoRow label="근무 장소" content={job.place} />
          <InfoRow label="근무 상세주소" content={job.placeDetail} />
          <S.InfoRow>
            <S.Label>근무처 사진</S.Label>
            <S.Content>
              {job.companyImage ? (
                <S.CompanyImage src={job.companyImage} alt="근무처 사진" />
              ) : (
                <>근무처 사진이 없습니다.</>
              )}
            </S.Content>
          </S.InfoRow>
          <InfoRow label="담당자명" content={job.company?.name} />
          <InfoRow label="담당자 이메일" content={job.company?.email} />
        </InfoContainer>

        <InfoContainer title="모집 내용">
          <InfoRow label="모집직종" content={job?.workCategory?.join(", ")} />
          <InfoRow label="고용형태" content={job?.workType?.join(", ")} />
          <InfoRow label="모집인원" content={job.peopleNum + "명"} />
          <InfoRow label="경력" content={getTranslatedCareer(job.career)} />
        </InfoContainer>

        <InfoContainer title="근무조건">
          <InfoRow label="급여" content={job.pay + "원"} />
          <InfoRow
            label="근무기간"
            content={getTranslatedWorkTerm(job.workTerm)}
          />
          <InfoRow
            label="근무시간"
            content={job.workTime === "any" ? "시간협의" : `${job.workTime}시`}
          />
        </InfoContainer>

        <InfoContainer title="자격조건">
          <InfoRow label="성별" content={getTranslatedGender(job.gender)} />
          <InfoRow
            label="연령"
            content={job.age === "any" ? "연령 무관" : `${job.age}세`}
          />
        </InfoContainer>

        <InfoContainer title="접수내용">
          <InfoRow label="모집마감일" content={job.deadline} />
          <InfoRow label="지원방법" content={job?.submitMethod?.join(", ")} />
        </InfoContainer>

        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}

        {role === "PERSONAL" && (
          <>
            <S.SubmitButton onClick={() => setShowModal(true)}>
              알바 지원하기
            </S.SubmitButton>
            <Modal
              show={showModal}
              onClose={() => setShowModal(false)}
              handleSubmit={handleSubmit}
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
