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
    border-radius: 10px;
    padding: 20px;
  `,
  DetailPageFrame: styled.div`
    background-color: #f7f8fa;
    display: flex;
    flex-direction: column;
    padding: 0 0 50px 0;
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
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 500px;
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

  ResumeNameGenderAge: styled.div`
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 5px;
  `,

  ResumeCareer: styled.div`
    color: #007bff;
    font-size: 0.9rem;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
  `,

  ResumeSummary: styled.div`
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 500px;
  `,

  DesiredLocation: styled.div`
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 170px;
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
  ResumeDetailHeader: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
  `,
  ResumeDetailTitle: styled.div`
    font-size: 26px;
    font-weight: bold;
    border-bottom: 1px solid #bbb;
    padding: 10px 0 10px 0;
  `,

  ResumeDetailProfile: styled.div`
    display: flex;
    padding: 20px;
    margin-bottom: 20px;
    align-items: center;
  `,
  ProfileInfo: styled.div`
    flex-direction: column;
  `,
  ResumeDetailInfo: styled.div`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 10px;
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
  InfoContainerColumn: styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 20px auto 0 auto;
    width: 1000px;
    padding: 10px 30px;
    border-radius: 20px;
  `,
  InfoRow: styled.div`
    display: flex;
    font-size: 18px;
    margin: 20px;
    white-space: pre-wrap;
  `,
  Label: styled.div`
    flex: 1;
    color: #333;
    white-space: nowrap;
  `,
  Content: styled.div`
    flex: 7;
    font-weight: bold;
    color: black;
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
    margin-top: 20px;
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
