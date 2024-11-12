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
};

export default S;
