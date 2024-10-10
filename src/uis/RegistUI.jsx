import styled from "styled-components";
import { Link } from "react-router-dom";

const S = {
  ProfileContainer: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  `,
  ProfileImage: styled.div`
    margin: 20px 30px 0 20px;
    img {
      width: 80px;
      height: 80px;
    }
  `,
  ProfileInfo: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  `,
  InfoRow: styled.div`
    display: flex;
    justify-content: flex-start;
    font-size: 15px;
    align-items: center;
    gap: 15px;
  `,
  InfoLabel: styled.div`
    color: grey;
  `,
  Name: styled.div`
    font-size: 19px;
    font-weight: bold;
  `,
  InfoValue: styled.div``,
  EditButton: styled.button`
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 15px;
    padding: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `,
  Link: styled(Link)``,
  Wrapper: styled.div``,
  MainContainer: styled.div`
    max-width: 1000px;
    margin: 20px auto;
  `,
  Title: styled.div`
    font-size: 25px;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 7px;
    border-bottom: 1px solid #bbb;
  `,
  ResumeTitle: styled.input`
    padding: 10px;
    width: 97.3%;
    margin: 20px 0 20px 0;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 10px;
  `,
  ResumeContent: styled.input`
    padding: 10px 10px 80px 10px;
    width: 97.3%;
    margin: 20px 0 20px 0;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 10px;
  `,
  CareerContent: styled.input`
    padding: 10px 10px 80px 10px;
    width: 97.3%;
    margin: 20px 0 20px 0;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 10px;
  `,
  SubTitleWrapper: styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #eee;
  `,
  SubTitle: styled.div`
    font-size: 16px;
    font-weight: bold;
    white-space: nowrap;
  `,
  EducationSelect: styled.select`
    margin-left: 20px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
  `,
  TabWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    min-width: 1000px;
    margin-left: 33px;
  `,
  TabLeft: styled.div`
    text-align: center;
    padding: 7px 50px 7px 50px;
    cursor: pointer;
    font-size: 13px;
    border: 1px solid #ddd;
    border-radius: 10px 0 0 10px;
    background-color: ${({ active }) => (active ? "#fff" : "#f7f7f7")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
  `,
  TabMiddle: styled.div`
    text-align: center;
    padding: 7px 50px 7px 50px;
    cursor: pointer;
    font-size: 13px;
    border: 1px solid #ddd;
    border-left: none;
    background-color: ${({ active }) => (active ? "#fff" : "#f7f7f7")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
  `,
  TabRight: styled.div`
    text-align: center;
    padding: 7px 50px 7px 50px;
    cursor: pointer;
    font-size: 13px;
    border: 1px solid #ddd;
    border-left: none;
    border-radius: 0px 10px 10px 0px;
    background-color: ${({ active }) => (active ? "#fff" : "#f7f7f7")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
  `,
  CheckBoxWrapper: styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-left: 20px;
    padding: 10px;
  `,
  CheckBoxLabel: styled.label`
    display: flex;
    align-items: center;
    font-size: 16px;
  `,
  CheckBoxInput: styled.input`
    margin-right: 5px;
  `,
  SubmitButton: styled.button`
    width: 99%;
    padding: 20px;
    margin: 20px 0 20px 0px;
    font-size: 20px;
    font-weightl: bold;
    background-color: #fdf25d;
    border: 1px solid #fae04b;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `,
};

export default S;
