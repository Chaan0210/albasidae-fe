import S from "../../uis/RegistUI";

const ManagerPhone = ({ value, onChange }) => {
  return (
    <S.NoticeInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder="핸드폰 번호(- 제외 번호)"
    />
  );
};

export default ManagerPhone;
