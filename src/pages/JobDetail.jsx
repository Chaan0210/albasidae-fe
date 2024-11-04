import React from "react";
import { useParams } from "react-router-dom";
import MOCK_JobData from "../mock/mock-jobData";
import Header from "../components/Header";
import S from "../uis/JobUI";

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

const JobDetailHeader = ({ companyName, title }) => (
  <S.JobDetailContainer>
    <S.DetailCompanyName>{companyName}</S.DetailCompanyName>
    <S.DetailJobTitle>{title}</S.DetailJobTitle>
  </S.JobDetailContainer>
);

function JobDetail() {
  const { id } = useParams();
  const job = MOCK_JobData.find((job) => job.id === parseInt(id));

  return (
    <>
      <Header />
      <S.DetailPageFrame>
        <JobDetailHeader companyName={job.companyName} title={job.title} />
        <S.JobDetailContainer>
          <S.InfoContainerRow>
            <S.InfoColumn>
              <S.Label>{job.wageType}</S.Label>
              <S.Content>{job.wage}</S.Content>
            </S.InfoColumn>
            <S.InfoColumn>
              <S.Label>{"기간"}</S.Label>
              <S.Content>{job.workTerm}</S.Content>
            </S.InfoColumn>
            <S.InfoColumn>
              <S.Label>{"요일"}</S.Label>
              <S.Content>{job.workDays}</S.Content>
            </S.InfoColumn>
            <S.InfoColumn>
              <S.Label>{"시간"}</S.Label>
              <S.Content>{job.workTime}</S.Content>
            </S.InfoColumn>
          </S.InfoContainerRow>
        </S.JobDetailContainer>
        <InfoContainer title="모집조건">
          <InfoRow label="모집기간" content={job.recruitmentPeriod} />
          <InfoRow label="모집인원" content={job.peopleNum} />
          <InfoRow label="학력" content={job.career} />
        </InfoContainer>
        <InfoContainer title="근무지 정보">
          <InfoRow label="근무지명" content={job.companyName} />
          <InfoRow label="근무지" content={job.location} />
        </InfoContainer>
        <InfoContainer title="근무조건">
          <InfoRow label="급여" content={`${job.wageType} ${job.wage}`} />
          <InfoRow label="근무기간" content={job.workTerm} />
          <InfoRow label="근무시간" content={job.workTime} />
        </InfoContainer>
        <S.JobDetailContainer>
          <S.InfoTitle>{"상세 모집내용"}</S.InfoTitle>
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
}

export default JobDetail;
