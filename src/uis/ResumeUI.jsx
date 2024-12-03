import { ReactComponent as ProfileImage } from "../images/ProfileImage.svg";
import styled from "styled-components";

const S = {
  PageFrame: styled.div`
    background-color: #ffffff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1075px;
    margin: 10px auto;
    white-space: nowrap;
    border-radius: 8px;
    padding: 20px;
  `,
  DetailPageFrame: styled.div`
    background-color: #ffffff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1075px;
    margin: 10px auto;
    white-space: nowrap;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
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

  ResumeDetailHeader: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
  `,

  ResumeDetailTitle: styled.h1`
    font-size: 1.5rem;
    border-bottom: 3px solid #000;
  `,

  ResumeDetailProfile: styled.div`
    display: flex;
    padding: 20px;
    margin-bottom: 20px;
  `,

  ResumeDetailInfo: styled.div`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 20px;
  `,

  ResumeDetailProfileImage: styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-right: 40px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,

  ResumeDetailProfileInfo: styled.div`
    flex: 1;
  `,

  ProfileName: styled.h2`
    font-size: 1.2rem;
    margin: 0 0 10px;
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
    padding: 0 0;
    margin-left: 10px;
  `,

  Content: styled.span`
    font-weight: bold;
    color: #333;
    padding: 0 0;
  `,
  DeleteButton: styled.button`
    color: red;
    background-color: white;
    border: 1px solid red;
    border-radius: 10px;
    padding: 8px 15px;
    &:hover {
      background-color: #eee;
    }
  `,
  EditButton: styled.button`
    color: #2f6df6;
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
  `,
  ProfileImage: styled(ProfileImage)`
    width: 75px;
    height: 75px;
  `,
  ProfileImage_2: styled(ProfileImage)`
    width: 120px;
    height: 120px;
  `,
};

export default S;
