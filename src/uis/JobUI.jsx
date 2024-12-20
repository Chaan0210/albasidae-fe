// 공고에 사용되는 레이아웃과 디자인을 정의하는 스타일 컴포넌트

import styled from "styled-components";
import { keyframes } from "styled-components";

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const S = {
  PageFrame: styled.div`
    background-color: #ffffff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1075px;
    margin: 0 auto;
  `,

  PageTitle: styled.h1`
    font-size: 1.5rem;
    margin: 2rem left 1rem;
  `,

  FilterContainer: styled.div`
    padding: inherit;
    background-color: #ffffff;
    margin-top: 1rem;
    margin-bottom: 1rem;
  `,

  FilterSection: styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    flex-wrap: nowrap;
  `,

  FilterTitle: styled.h3`
    font-size: 18px;
    color: #333;
    font-weight: bold;
    margin: 0;
    min-width: 80px;
  `,

  FilterGroup: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    flex-grow: 1;
  `,

  FilterButton: styled.button`
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 0.9rem;
    color: ${({ active }) => (active ? "white" : "#333")};
    background-color: ${({ active }) => (active ? "#004094" : "white")};
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: ${({ active }) => (active ? "#004094" : "#f0f0f0")};
    }
  `,

  StyledButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 10px 10px 3px;
    border: 1px solid ${(props) => (props.active ? "#ccc" : "#ccc")};
    border-radius: 10px;
    font-size: 16px;
    appearance: none;
    color: #333;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="gray" d="M7 10l5 5 5-5H7z"/></svg>')
      no-repeat right 5px center;
    background-color: ${(props) => (props.active ? "#eee" : "#ffffff")};

    background-size: 12px;
    min-width: 150px;
    text-align: left;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: ${(props) => (props.active ? "#ccc" : "#f0f0f0")};
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(136, 136, 136, 0.5);
    }
  `,

  FilterBox: styled.div`
    width: 100%;
    max-width: 1075px;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #f9f9f9;
    animation: ${slideDown} 0.3s ease forwards;
  `,

  JobTable: styled.table`
    width: 100%;
    border-collapse: collapse;
    text-decoration: none;
  `,

  JobTableHead: styled.thead`
    font-weight: bold;
  `,

  JobTableHeader: styled.th`
    padding: 0.75rem;
    text-align: center;
    border-bottom: 1px solid #ddd;
  `,

  JobTableHeaderRow: styled.tr`
    padding: 0.75rem;
  `,

  JobTableRow: styled.tr`
    cursor: pointer;
    &:hover {
      background-color: #fcfdff;
    }
  `,

  JobTableLeft: styled.td`
    padding: 0.75rem;
    border-bottom: 1px solid #ddd;
    text-align: left;
    text-decoration: none;

    &:hover {
      text-decoration: deepskyblue;
    }
  `,

  JobTableCenter: styled.td`
    padding: 0.75rem;
    border-bottom: 1px solid #ddd;
    text-align: center;
  `,

  CompanyName: styled.strong`
    display: block;
    color: #000000;
    font-weight: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 250px;
  `,

  JobTitle: styled.p`
    margin: 0.5rem 0 0;
    color: #000000;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 250px;
  `,

  WageType: styled.span`
    display: block;
    font-weight: bold;
    color: ${(props) => {
      switch (props.wageType) {
        case "시급":
          return "purple";
        case "월급":
          return "red";
        case "연봉":
          return "green";
        default:
          return "black";
      }
    }};
  `,

  Wage: styled.p`
    margin: 0.5rem 0 0;
    color: #000000;
  `,
  DetailPageFrame: styled.div`
    background-color: #f7f8fa;
    padding: 10px 0 50px;
    display: flex;
    flex-direction: column;
  `,
  JobDetailContainer: styled.div`
    padding: 30px;
    background-color: #ffffff;
    border-radius: 20px;
    width: 1100px;
    margin: 10px auto;
  `,

  DetailCompanyName: styled.strong`
    display: block;
    color: #000000;
    font-weight: normal;
    text-align: left;
  `,

  DetailJobTitle: styled.h1`
    display: block;
    font-size: 25px;
    color: #333;
    text-align: left;
    font-weight: bold;
    margin-bottom: 2rem;
  `,

  InfoTitle: styled.h1`
    display: block;
    font-size: 25px;
    color: #333;
    text-align: left;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 2rem;
  `,

  InfoContainerRow: styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px 3px;
    gap: 150px;
  `,

  InfoContainerColumn: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  InfoRow: styled.div`
    display: flex;
    gap: 100px;
    font-size: 18px;
    padding: 15px 0;
    align-items: center;
  `,

  InfoColumn: styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    padding: 5px 0;
    gap: 10px;
  `,

  Label: styled.span`
    width: 80px;
    font-weight: normal;
    color: #333;
    white-space: nowrap;
  `,

  Content: styled.span`
    font-weight: bold;
    color: #333;
    word-break: break-word;
    white-space: pre-wrap;
  `,
  PaginationContainer: styled.div`
    margin-top: 20px;
  `,

  PaginationButton: styled.button`
    background-color: ${(props) => (props.active ? "#4CAF50" : "#f0f0f0")};
    color: ${(props) => (props.active ? "#ffffff" : "#333")};
    border: 1px solid #ddd;
    padding: 10px 15px;
    margin: 0 5px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${(props) => (props.active ? "#45a049" : "#e0e0e0")};
    }

    &:disabled {
      background-color: #dcdcdc;
      cursor: not-allowed;
      color: #aaa;
    }
  `,
  CompanyImage: styled.img`
    width: 150px;
    height: 150px;
  `,
  ApplicantButton: styled.button`
    color: black;
    font-size: 16px;
    font-weight: bold;
    background-color: #fdf25d;
    border: 1px solid #fae04b;
    border-radius: 10px;
    padding: 8px 15px;
    &:hover {
      opacity: 0.8;
    }
    margin-right: 20px;
  `,
  DeleteButton: styled.button`
    color: red;
    font-size: 16px;
    background-color: white;
    border: 1px solid red;
    border-radius: 10px;
    padding: 8px 15px;
    &:hover {
      background-color: #eee;
    }
    margin-right: 20px;
  `,
  EditButton: styled.button`
    color: #2f6df6;
    font-size: 16px;
    background-color: white;
    border: 1px solid #2f6df6;
    border-radius: 10px;
    padding: 8px 15px;
    &:hover {
      background-color: #eee;
    }
    margin-right: 20px;
  `,
  ButtonGroup: styled.div`
    display: flex;
    margin-bottom: 20px;
  `,
  SubmitButton: styled.button`
    width: 100%;
    max-width: 1135px;
    padding: 20px;
    margin: 20px auto;
    font-size: 20px;
    font-weight: bold;
    background-color: #fdf25d;
    border: 1px solid #fae04b;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `,
  ErrorMessage: styled.div`
    color: red;
    font-size: 18px;
    text-align: center;
    margin-top: 20px;
  `,
};

export default S;
