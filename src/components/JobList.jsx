import React from "react";
import JobCard from "./JobCard";
import mockData from "../mock/mock-job";
import styled from "styled-components";

const S = {
  JobListWrapper: styled.div`
    padding: 15px;
  `,
  Title: styled.div`
    font-size: 20px;
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
  `,
};

const JobList = () => {
  return (
    <S.JobListWrapper>
      <S.Title>채용정보</S.Title>
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
  );
};

export default JobList;
