import styled from "styled-components";

const S = {
  PageFrame: styled.div`
    background-color: #ffffff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1075px;
    margin: 0 auto;
    white-space: nowrap;
  `,

  ResumeTable: styled.table`
    width: 100%;
    border-collapse: collapse;
    text-decoration: none;
  `,

  ResumeTableHead: styled.thead`
    font-weight: bold;
  `,

  ResumeTableHeader: styled.th`
    padding: 0.75rem;
    text-align: center;
    border-bottom: 1px solid #ddd;
  `,

  ResumeTableHeaderRow: styled.tr`
    padding: 0.75rem;
  `,

  ResumeTableRow: styled.tr`
    &:hover {
      background-color: #fcfdff;
    }
  `,

  ResumeTableLeft: styled.td`
    padding: 0.75rem;
    border-bottom: 1px solid #ddd;
    text-align: left;
    text-decoration: none;

    &:hover {
      text-decoration: deepskyblue;
    }
  `,

  ResumeTableCenter: styled.td`
    padding: 0.75rem;
    border-bottom: 1px solid #ddd;
    text-align: center;
    justify-items: center;
  `,

  ResumeTitle: styled.p`
    margin: 0.5rem 0 0.5rem;
    color: #000000;
    font-weight: bold;
  `,

  ResumeImage: styled.div`
    width: 75px;
    height: 75px;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    margin-right: 20px;
  `,

  ResumeDetails: styled.div`
    flex: 1;
  `,

  ResumeNameGenderAge: styled.div`
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 5px;
  `,

  ResumeCareer: styled.div`
    color: #007bff;
    font-size: 0.9rem;
    margin-bottom: 5px;
  `,

  ResumeSummary: styled.div`
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 10px;
  `,

  DesiredLocation: styled.div`
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 5px;
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
    border-radius: 5px;
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
};

export default S;
