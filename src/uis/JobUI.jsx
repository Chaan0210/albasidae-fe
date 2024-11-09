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
    gap: 1.8rem;
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
    border-radius: 5px;
    font-size: 0.9rem;
    color: ${({ active }) => (active ? "white" : "#333")};
    background-color: ${({ active }) => (active ? "#333" : "white")};
    cursor: pointer;

    &:hover {
      background-color: ${({ active }) => (active ? "#333" : "#f0f0f0")};
    }
  `,

  StyledButton: styled.button`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    appearance: none;
    color: #333;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="gray" d="M7 10l5 5 5-5H7z"/></svg>')
      no-repeat right 10px center;
    background-size: 12px;
    min-width: 130px;
    text-align: left;
    cursor: pointer;
  `,

  FilterBox: styled.div`
    width: 100%;
    max-width: 1075px;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
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
  `,

  JobTitle: styled.p`
    margin: 0.5rem 0 0;
    color: #000000;
    font-weight: bold;
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
    align-content: center;
  `,

  Wage: styled.p`
    margin: 0.5rem 0 0;
    color: #000000;
    font-weight: normal;
    align-content: center;
  `,
  DetailPageFrame: styled.div`
    background-color: #f7f8fa;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
  `,
  JobDetailContainer: styled.div`
    padding: 30px;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 100%;
    max-width: 1075px;
    margin: 1rem auto 0;
    &:last-child {
      margin-bottom: 1rem;
    }
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
    padding: 5px 0;
  `,

  InfoColumn: styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    padding: 5px 0;
  `,

  Label: styled.span`
    width: 80px;
    font-weight: normal;
    color: #333;
    padding: 7px 0;
  `,

  Content: styled.span`
    font-weight: bold;
    color: #333;
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
  CompanyImage: styled.img`
    width: 200px;
    height: 200px;
  `,
};

export default S;
