import S from "../../uis/RegistUI";

const ResumeCareer = ({ value, onChange }) => {
  return (
    <S.CareerContent
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="경력이 있다면 회사명, 근무기간, 담당업무와 내용을 작성해주세요."
    />
  );
};

export default ResumeCareer;
