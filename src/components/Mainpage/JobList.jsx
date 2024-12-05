import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobCard from "./JobCard";
import styled from "styled-components";

const S = {
  Background: styled.div`
    background-color: #f9f9f9;
    padding-bottom: 10%;
  `,
  JobListWrapper: styled.div`
    padding: 15px;
    max-width: 1200px;
    min-width: 900px;
    margin: 0 auto;
  `,
  Title: styled.div`
    font-size: 24px;
    font-weight: bold;
    padding: 10px;
    padding-top: 5px;
    padding-bottom: 0px;
  `,
  JobCards: styled.div`
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-bottom: 30px;
  `,
};

const JobList = () => {
  const [latestJobs, setLatestJobs] = useState([]);
  const [popularJobs, setPopularJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLatestJobs = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/job-posts/sorted?sort=latest"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch latest job posts");
        }
        const data = await response.json();
        setLatestJobs(data.data);
      } catch (error) {
        alert("최신 채용 정보를 가져오는 중 오류가 발생했습니다.");
        console.error(error);
      }
    };

    const fetchPopularJobs = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/job-posts/sorted?sort=popular"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch popular job posts");
        }
        const data = await response.json();
        setPopularJobs(data.data);
      } catch (error) {
        alert("인기 채용 정보를 가져오는 중 오류가 발생했습니다.");
        console.error(error);
      }
    };
    fetchLatestJobs();
    fetchPopularJobs();
  }, []);

  const handleCardClick = (jobId) => {
    navigate(`/job/${jobId}`);
  };

  return (
    <S.Background>
      <S.JobListWrapper>
        <S.Title>인기 채용정보</S.Title>
        <S.JobCards>
          {popularJobs.map((job, index) => (
            <JobCard
              key={index}
              companyName={job.companyName}
              title={job.title}
              place={job.place}
              companyImage={job.companyImage}
              onClick={() => handleCardClick(job.id)}
            />
          ))}
        </S.JobCards>
        <S.Title>최신 채용정보</S.Title>
        <S.JobCards>
          {latestJobs.map((job, index) => (
            <JobCard
              key={index}
              companyName={job.companyName}
              title={job.title}
              place={job.place}
              companyImage={job.companyImage}
              onClick={() => handleCardClick(job.id)}
            />
          ))}
        </S.JobCards>
      </S.JobListWrapper>
    </S.Background>
  );
};

export default JobList;
