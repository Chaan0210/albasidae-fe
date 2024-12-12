// 개인 프로필 관련 컴포넌트에서 레이아웃과 디자인을 정의하는 스타일 컴포넌트

import styled from "styled-components";
import { ReactComponent as ProfileImage } from "../images/ProfileImage.svg";
import { ReactComponent as PaperPlaneIcon } from "../images/PaperPlaneIcon.svg";
import { ReactComponent as ChatIcon } from "../images/ChatIcon.svg";
import { ReactComponent as GlassesIcon } from "../images/GlassesIcon.svg";
import { ReactComponent as AlgorithmIcon } from "../images/AlgorithmIcon.svg";
import { ReactComponent as PersonCheckIcon } from "../images/PersonCheckIcon.svg";

const S = {
  Wrapper: styled.div`
    background-color: #f7f8fa;
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding-bottom: 50px;
  `,
  TopWrapper: styled.div`
    margin: 30px auto 0px auto;
    width: 1200px;
    gap: 10px;
    display: flex;
    flex-direction: row;
    white-space: nowrap;
  `,
  ProfileContainer: styled.div`
    flex: 0.7;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
  `,
  RightContainer: styled.div`
    flex: 1;
    background-color: white;
    border-radius: 20px;
    padding: 10px;
    margin-bottom: auto;
  `,
  ResumeContainer: styled.div`
    background-color: white;
    padding: 30px;
    margin-bottom: 10px;
    border-radius: 20px;
    font-size: 20px;
  `,
  Left: styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  TopLeft: styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
  `,
  ContentWrapper: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  ContentLeft: styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex: 1;
  `,
  ContentRight: styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex: 1;
  `,
  ContentContainer: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      box-shadow: 0px 0px 8px grey;
    }
  `,
  BottomContainer: styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 20px;
  `,

  UserInfo: styled.div``,
  SettingIcon: styled.button`
    width: 30px;
    height: 30px;
    margin-left: auto;
    background-color: #ddd;
    border-radius: 50%;
    padding: 3px;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #ccc;
    }
  `,
  UserInfoTop: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    justify-content: center;
  `,
  UserImage: styled.img`
    width: 110px;
    height: 110px;
    border-radius: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: opacity 0.3s ease;
  `,
  UserName: styled.div`
    font-size: 20px;
    font-weight: bold;
  `,
  UserInfoBottom: styled.div`
    display: flex;
    margin: 10px 10px 10px 10px;
    align-items: center;
  `,
  BottomText: styled.div`
    flex: 1;
    color: grey;
    font-size: 14px;
  `,
  BottomData: styled.div`
    flex: 2.2;
    font-size: 15px;
    color: black;
  `,
  ProfileImage: styled(ProfileImage)`
    width: 100px;
    height: 100px;
    margin: 10px;
    cursor: pointer;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 0.5;
    }
  `,
  PaperPlaneIcon: styled(PaperPlaneIcon)`
    width: 45px;
    height: 45px;
    margin-bottom: 10px;
  `,
  ChatIcon: styled(ChatIcon)`
    width: 45px;
    height: 45px;
    margin-bottom: 10px;
  `,
  GlassesIcon: styled(GlassesIcon)`
    width: 60px;
    height: 60px;
    margin-top: -8px;
  `,
  AlgorithmIcon: styled(AlgorithmIcon)`
    width: 60px;
    height: 60px;
  `,
  PersonCheckIcon: styled(PersonCheckIcon)`
    margin-bottom: 5px;
    width: 50px;
    height: 50px;
  `,
  ImageWrapper: styled.div`
    margin-bottom: 10px;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    overflow: hidden;
    &:hover img {
      opacity: 0.5;
    }
    cursor: pointer;
    position: relative;
    &:hover::after {
      content: "수정";
      position: absolute;
      bottom: 30%;
      left: 50%;
      transform: translateX(-50%);
      background-color: black;
      color: white;
      font-size: 16px;
      padding: 2px 5px;
      border-radius: 10px;
    }
  `,
  AlbasidaeLogo: styled.img`
    width: 80px;
    height: 80px;
  `,
  MainTitle: styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
  `,
  AppliedJobList: styled.div`
    background-color: #f9f9f9;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      background-color: #f3f3f3;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
  `,
  AppliedJobTitle: styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 800px;
  `,
  AppliedJobDetails: styled.div`
    font-size: 14px;
    color: #666;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 800px;
  `,
};

export default S;
