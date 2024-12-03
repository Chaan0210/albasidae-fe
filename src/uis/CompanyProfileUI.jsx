import styled from "styled-components";
import { ReactComponent as ProfileImage } from "../images/ProfileImage.svg";
import { ReactComponent as PaperPlaneIcon } from "../images/PaperPlaneIcon.svg";
import { ReactComponent as GlassesIcon } from "../images/GlassesIcon.svg";

const S = {
  Wrapper: styled.div`
    display: flex;
    background-color: #f7f8fa;
    gap: 20px;
    padding-bottom: 50px;
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
    width: 55px;
    height: 55px;
    margin-bottom: 10px;
  `,
  GlassesIcon: styled(GlassesIcon)`
    width: 70px;
    height: 70px;
    margin-top: -8px;
  `,
  Container: styled.div`
    margin: 40px auto 0px auto;
    min-width: 1000px;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    gap: 10px;
  `,
  ProfileContainer: styled.div`
    flex: 1;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
  `,
  TopComponent: styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
  `,
  ContentContainer: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
  MainTitle: styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
  `,
  JobList: styled.div`
    background-color: #f9f9f9;
    padding: 15px;
    margin-bottom: 10px;
    margin-right: 20px;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      background-color: #f3f3f3;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
  `,
  JobTitle: styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
  `,
  JobDetails: styled.div`
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
  `,
  JobDetailNumber: styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #004094;
  `,
};

export default S;
