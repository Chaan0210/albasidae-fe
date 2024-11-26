import S from "../../uis/RegistUI";

const WorkAddress = ({ value, onChange }) => {
  return (
    <S.NoticeInput
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="상세주소를 입력해주세요."
    />
  );
};

export default WorkAddress;
