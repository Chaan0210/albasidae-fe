import S from "../../uis/RegistUI";

const NoticeCompanyContent = ({ value, onChange }) => {
  return (
    <S.NoticeInput
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="회사의 주요 사업내용을 입력해주세요."
    />
  );
};

export default NoticeCompanyContent;
