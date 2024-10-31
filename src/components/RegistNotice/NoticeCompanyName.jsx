import S from "../../uis/RegistUI";

const NoticeCompanyName = ({ value, onChange }) => {
  return (
    <S.NoticeInput
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="회사명"
    />
  );
};

export default NoticeCompanyName;
