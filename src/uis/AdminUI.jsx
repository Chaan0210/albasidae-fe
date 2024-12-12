// Admin 페이지에 사용되는 스타일 컴포넌트를 정의

import styled from "styled-components";

const S = {
  AdminContainer: styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  `,
  MainTitle: styled.div`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 30px;
    color: #333;
  `,
  Section: styled.div`
    margin-bottom: 40px;
  `,
  SectionTitle: styled.div`
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #444;
  `,
  UserCard: styled.div`
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `,
  UserInfo: styled.div`
    display: flex;
    flex-direction: column;
  `,
  UserLabel: styled.span`
    font-weight: bold;
    margin-right: 10px;
  `,
  UserContent: styled.span`
    margin-top: 5px;
  `,
  ResumeCard: styled.div`
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  `,
  ResumeInfo: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ResumeLabel: styled.span`
    font-weight: bold;
    margin-right: 10px;
  `,
  ResumeContent: styled.span`
    margin-top: 5px;
  `,
  JobCard: styled.div`
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  `,
  JobInfo: styled.div`
    display: flex;
    flex-direction: column;
  `,
  JobLabel: styled.span`
    font-weight: bold;
    margin-right: 10px;
  `,
  JobContent: styled.span`
    margin-top: 5px;
  `,
  DeleteButton: styled.button`
    font-weight: bold;
    font-size: 14px;
    color: #ff4d4d;
    background-color: white;
    border: 2px solid #ff4d4d;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #ddd;
    }
    white-space: nowrap;
    margin-left: 10px;
  `,
  ErrorMessage: styled.p`
    color: red;
    text-align: center;
    font-weight: bold;
  `,
};

export default S;
