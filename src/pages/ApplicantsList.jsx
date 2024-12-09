import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { AuthContext } from "../components/auth/AuthContext";

const S = {
  ApplicantsContainer: styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
  `,
  MainTitle: styled.div`
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: bold;
  `,
  ErrorMessage: styled.p`
    color: red;
    text-align: center;
  `,
  ApplicantCard: styled.div`
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `,
  ApplicantText: styled.div`
    flex-direction: column;
  `,
  ApplicantInfo: styled.div`
    margin-bottom: 10px;
  `,
  ApplicantLabel: styled.span`
    font-weight: bold;
    display: inline-block;
    margin-right: 10px;
  `,
  ApplicantContent: styled.span`
    display: inline-block;
  `,
  ResumeButton: styled.button`
    background-color: #5194f6;
    font-size: 16px;
    font-weight: bold;
    color: white;
    border: 1px solid #2f6df6;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    align-self: flex-start;
    margin-top: 10px;
    white-space: nowrap;
    margin-left: 10px;
    &:hover {
      opacity: 0.8;
    }
  `,
};

const ApplicantsList = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const { isLoggedIn } = useContext(AuthContext);
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [applicants, setApplicants] = useState([]);
  const [applicantResumes, setApplicantResumes] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    const fetchApplicants = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/job-applications/applications/${jobId}`,
          {
            headers: {
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch applicants data");
        }
        const responseData = await response.json();
        setApplicants(responseData?.data?.applications || []);
      } catch (error) {
        console.error("Fail to fetch applicants: ", error);
        setErrorMessage("Applicants data could not be retrieved.");
      }
    };

    fetchApplicants();
  }, [jobId, isLoggedIn, navigate, API_URL]);

  useEffect(() => {
    const fetchApplicantResumes = async () => {
      try {
        const resumePromises = applicants.map(async (applicant) => {
          const response = await fetch(
            `${API_URL}/api/resumes/${applicant.resume}`,
            {
              headers: {
                "ngrok-skip-browser-warning": "69420",
              },
            }
          );
          if (!response.ok) {
            throw new Error("Failed to fetch resume data");
          }
          const resumeData = await response.json();
          return { applicantId: applicant.id, resumeData: resumeData?.data };
        });

        const resumeResults = await Promise.all(resumePromises);
        const resumesMap = resumeResults.reduce(
          (acc, { applicantId, resumeData }) => {
            acc[applicantId] = resumeData;
            return acc;
          },
          {}
        );

        setApplicantResumes(resumesMap);
      } catch (error) {
        console.error("Failed to fetch resumes: ", error);
        setErrorMessage("Resume data could not be retrieved.");
      }
    };
    if (applicants.length > 0) {
      fetchApplicantResumes();
    }
  }, [applicants, API_URL]);

  const handleResumeClick = (resumeId) => {
    navigate(`/resume/${resumeId}`);
  };

  return (
    <>
      <Header />
      <S.ApplicantsContainer>
        <S.MainTitle>지원자 리스트</S.MainTitle>
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        {applicants.length > 0 ? (
          applicants.map((applicant) => (
            <S.ApplicantCard key={applicant.id}>
              <S.ApplicantText>
                <S.ApplicantInfo>
                  <S.ApplicantLabel>지원자 이름:</S.ApplicantLabel>
                  <S.ApplicantContent>
                    {applicantResumes[applicant.id]?.personal.name ||
                      "정보 없음"}
                  </S.ApplicantContent>
                </S.ApplicantInfo>
                <S.ApplicantInfo>
                  <S.ApplicantLabel>
                    사장님(인사담당자님)께 한마디:
                  </S.ApplicantLabel>
                  <S.ApplicantContent>
                    {applicant.description}
                  </S.ApplicantContent>
                </S.ApplicantInfo>
              </S.ApplicantText>

              <S.ResumeButton
                onClick={() => handleResumeClick(applicant.resume)}
              >
                이력서 상세보기
              </S.ResumeButton>
            </S.ApplicantCard>
          ))
        ) : (
          <div>지원한 사람이 없습니다.</div>
        )}
      </S.ApplicantsContainer>
    </>
  );
};

export default ApplicantsList;
