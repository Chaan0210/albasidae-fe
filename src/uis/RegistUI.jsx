import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as ProfileImage } from "../images/ProfileImage.svg";

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
  StandardProfileImage: styled(ProfileImage)`
    width: 80px;
    height: 80px;
  `,
  ProfileInfo: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    margin-left: 30px;
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
  ResumeTitle: styled.textarea`
    padding: 10px;
    width: 90%;
    margin: 20px 0 0px 20px;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 10px;
  `,

  ResumeContent: styled.textarea`
    padding: 10px 10px 80px 10px;
    width: 90%;
    margin: 20px 0 0 20px;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 10px;
  `,
  CareerContent: styled.textarea`
    padding: 10px 10px 80px 10px;
    width: 90%;
    margin: 20px 0 0 20px;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 10px;
  `,
  SubTitleWrapper: styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #eee;
    justify-content: flex-start;
  `,
  SubTitle: styled.div`
    flex: 0.8;
    font-size: 16px;
    font-weight: bold;
    white-space: nowrap;
  `,
  EducationSelect: styled.select`
    padding: 7px 10px 7px 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    margin-left: 20px;
  `,
  TabWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    min-width: 1000px;
    margin-left: 75px;
  `,
  TabLeft: styled.div`
    text-align: center;
    padding: 12px 50px 12px 50px;
    cursor: pointer;
    font-size: 13px;
    border: 1px solid #ddd;
    border-radius: 10px 0 0 10px;
    transition: all 0.3s ease;
    background-color: ${({ active }) => (active ? "#fff" : "#f7f7f7")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
  `,
  TabMiddle: styled.div`
    text-align: center;
    padding: 12px 50px 12px 50px;
    cursor: pointer;
    font-size: 13px;
    border: 1px solid #ddd;
    border-left: none;
    transition: all 0.3s ease;

    background-color: ${({ active }) => (active ? "#fff" : "#f7f7f7")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
  `,
  TabRight: styled.div`
    text-align: center;
    padding: 12px 50px 12px 50px;
    cursor: pointer;
    font-size: 13px;
    border: 1px solid #ddd;
    transition: all 0.3s ease;
    border-left: none;
    border-radius: 0px 10px 10px 0px;
    background-color: ${({ active }) => (active ? "#fff" : "#f7f7f7")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
  `,
  CheckBoxWrapper: styled.div`
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-left: 5px;
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
    font-weight: bold;
    background-color: #fdf25d;
    border: 1px solid #fae04b;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `,
  NoticeSubmitButton: styled.button`
    width: 99%;
    padding: 20px;
    margin: 20px 0 20px 0px;
    font-size: 20px;
    font-weight: bold;
    background-color: #5194f6;
    border: 1px solid #2f6df6;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `,
  Button: styled.button`
    padding: 13px 23px;
    font-size: 16px;
    margin: 0 10px 0 0;
    border: 1px solid ${(props) => (props.isSelected ? "#004094" : "#ccc")};
    border-radius: 10px;
    background-color: ${(props) => (props.isSelected ? "#004094" : "#fff")};
    color: ${(props) => (props.isSelected ? "#fff" : "#000")};
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover {
      background-color: #004094;
      color: #fff;
      border: 1px solid #004094;
    }
  `,
  InputWrapper: styled.div`
    width: 10px;
    height: 10px;
  `,
  ImagePreview: styled.div`
    margin-top: 25px;
  `,
  DirectInput: styled.input`
    margin-left: 9px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
  `,
  ImageContainer: styled.div`
    margin: 10px 0px 0px 23px;
  `,
  NoticeInput: styled.textarea`
    padding: 10px;
    width: 97.3%;
    margin: 10px 0px 10px 20px;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 10px;
  `,
  PayInput: styled.input`
    margin-left: 20px;
    padding: 10px;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 10px;
  `,
  DatePickerWrapper: styled.div``,
  DateInput: styled.input`
    padding: 4px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  `,
  AgeSelectWrapper: styled.div`
    display: flex;
    align-items: center;
  `,
  Select: styled.select`
    margin: 0 5px;
    padding: 5px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 10px;
  `,
  ErrorMessage: styled.div`
    color: red;
    font-size: 16px;
    margin-top: 5px;
    margin-left: 20px;
  `,
  ComponentWrapper: styled.div`
    flex: 5.4;
    width: 100%;
    margin: 10px;
  `,
  PayContainer: styled.div`
    margin-left: 10px;
  `,
};

export default S;
