import S from "../../uis/RegistUI";

const NoticeTitle = ({ value, onChange }) => {
  return (
    <S.NoticeInput
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="예) 알바천국 OO점 매장관리 매니저 모집"
    />
  );
};

export default NoticeTitle;
