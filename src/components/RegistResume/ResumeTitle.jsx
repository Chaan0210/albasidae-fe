import S from "../../uis/RegistUI";

const ResumeTitle = ({ value, onChange }) => {
  return (
    <S.ResumeTitle
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="나를 표현할 한마디를 적어보세요."
    />
  );
};

export default ResumeTitle;
