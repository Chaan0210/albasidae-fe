import React from "react";
import JobCard from "./JobCard";
import mockData from "../../mock/mock-job";
import styled from "styled-components";

const S = {
  Background: styled.div`
    background-color: #f9f9f9;
    padding-bottom: 10%;
  `,
  JobListWrapper: styled.div`
    padding: 15px;
    white-space: nowrap;
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
  return (
    <S.Background>
      <S.JobListWrapper>
        <S.Title>인기 채용정보</S.Title>
        <S.JobCards>
          {mockData.map((job, index) => (
            <JobCard
              key={index}
              company={job.company}
              title={job.title}
              location={job.location}
            />
          ))}
        </S.JobCards>
        <S.Title>최신 채용정보</S.Title>
        <S.JobCards>
          {mockData.map((job, index) => (
            <JobCard
              key={index}
              company={job.company}
              title={job.title}
              location={job.location}
            />
          ))}
        </S.JobCards>
      </S.JobListWrapper>
    </S.Background>
  );
};

export default JobList;
