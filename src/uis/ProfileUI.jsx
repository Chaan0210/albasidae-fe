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
  `,
  TopWrapper: styled.div`
    margin: 40px auto 0px auto;
    min-width: 1030px;
    gap: 10px;
    display: flex;
    flex-direction: row;
    white-space: nowrap;
  `,
  ProfileContainer: styled.div`
    flex: 1;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
  `,
  RightContainer: styled.div`
    flex: 3;
    flex-direction: column;
  `,
  ResumeContainer: styled.div`
    background-color: white;
    padding: 30px;
    margin-bottom: 10px;
    border-radius: 20px;
    font-size: 20px;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
  `,
  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
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
    margin: 0px auto;
    min-width: 1000px;
    background-color: white;
    padding: 20px;
    border-radius: 20px;
  `,
  UserInfo: styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  SettingIcon: styled.button`
    width: 30px;
    height: 30px;
    margin-left: auto;
    margin-bottom: -30px;
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
    gap: 20px;
    margin: 0 10px 0 10px;
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
    justify-content: space-between;
    margin: 0 10px 0px 10px;
  `,
  BottomText: styled.div`
    color: grey;
    font-size: 14px;
  `,
  ProfileImage: styled(ProfileImage)`
    width: 100px;
    height: 100px;
    margin: 10px;
    cursor: pointer;
    transition: opacity 0.3s ease;
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
    width: 110px;
    height: 110px;
    border-radius: 50%;
    overflow: hidden;
    &:hover img {
      opacity: 0.5;
    }
    position: relative;
  `,
};

export default S;
