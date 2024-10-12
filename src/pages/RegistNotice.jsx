import S from "../uis/RegistUI";
import HeaderRegist from "../components/HeaderRegist";
import Age from "../components/RegistNotice/Age";
import Deadline from "../components/RegistNotice/Deadline";
import Gender from "../components/RegistNotice/Gender";
import NoticeCareer from "../components/RegistNotice/NoticeCareer";
import NoticeCompanyContent from "../components/RegistNotice/NoticeCompanyContent";
import NoticeCompanyImage from "../components/RegistNotice/NoticeCompanyImage";
import NoticeCompanyName from "../components/RegistNotice/NoticeCompanyName";
import NoticeTitle from "../components/RegistNotice/NoticeTitle";
import PeopleNum from "../components/RegistNotice/PeopleNum";
import SubmitMethod from "../components/RegistNotice/SubmitMethod";
import WorkCategory from "../components/RegistNotice/WorkCategory";
import WorkDays from "../components/RegistNotice/WorkDays";
import WorkPay from "../components/RegistNotice/WorkPay";
import WorkTerm from "../components/RegistNotice/WorkTerm";
import WorkTime from "../components/RegistNotice/WorkTime";
import WorkType from "../components/RegistNotice/WorkType";
import ResumeProfile from "../components/RegistResume/ResumeProfile";

const RegistNotice = () => {
  return (
    <S.Wrapper>
      <HeaderRegist />
      <S.MainContainer>
        <S.Title>담당자 정보</S.Title>
        <ResumeProfile />
        <S.Title>근무처 정보</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>공고제목</S.SubTitle>
          <NoticeTitle />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무회사</S.SubTitle>
          <NoticeCompanyName />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>주요 사업내용</S.SubTitle>
          <NoticeCompanyContent />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무처 사진</S.SubTitle>
          <NoticeCompanyImage />
        </S.SubTitleWrapper>

        <S.Title>모집 내용</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>모집직종</S.SubTitle>
          <WorkCategory />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>고용형태</S.SubTitle>
          <WorkType />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>모집인원</S.SubTitle>
          <PeopleNum />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>
            &nbsp;&nbsp;&nbsp;&nbsp;경력&nbsp;&nbsp;&nbsp;
          </S.SubTitle>
          <NoticeCareer />
        </S.SubTitleWrapper>

        <S.Title>근무조건</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>근무기간</S.SubTitle>
          <WorkTerm />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무요일</S.SubTitle>
          <WorkDays />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무시간</S.SubTitle>
          <WorkTime />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>
            &nbsp;&nbsp;&nbsp;급여&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </S.SubTitle>
          <WorkPay />
        </S.SubTitleWrapper>

        <S.Title>자격조건</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>성별</S.SubTitle>
          <Gender />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>연령</S.SubTitle>
          <Age />
        </S.SubTitleWrapper>

        <S.Title>접수내용</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>모집마감일</S.SubTitle>
          <Deadline />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>지원방법</S.SubTitle>
          <SubmitMethod />
        </S.SubTitleWrapper>

        <S.SubmitButton>공고 작성 완료</S.SubmitButton>
      </S.MainContainer>
    </S.Wrapper>
  );
};

export default RegistNotice;
