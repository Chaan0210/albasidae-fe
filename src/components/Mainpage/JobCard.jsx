import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CompanyIcon } from "../../images/CompanyIcon.svg";

const S = {
  JobCardWrapper: styled.div`
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 25px 20px 12px 20px;
    text-align: center;
    transition: all 0.3s ease;
    &:hover {
      transform: none;
      box-shadow: 0px 0px 8px grey;
    }
    height: 100px;
    min-width: 100px;
    background-color: white;
    cursor: pointer;
  `,
  CompanyName: styled.h3`
    margin: 0;
    font-size: 18px;
  `,
  JobTitle: styled.p`
    margin: 5px 0;
    font-size: 16px;
    color: #333;
  `,
  JobLocation: styled.p`
    margin: 5px 0;
    font-size: 14px;
    color: #666;
  `,
  IconWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  `,
  CompanyIcon: styled(CompanyIcon)`
    width: 100px;
    height: 100px;
  `,
};

const JobCard = ({ company, title, location }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <S.JobCardWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <S.IconWrapper>
          <S.CompanyIcon />
        </S.IconWrapper>
      ) : (
        <>
          <S.CompanyName>{company}</S.CompanyName>
          <S.JobTitle>{title}</S.JobTitle>
          <S.JobLocation>{location}</S.JobLocation>
        </>
      )}
    </S.JobCardWrapper>
  );
};

export default JobCard;
