// 이메일 입력 컴포넌트

import S from "../../uis/RegistUI";

const ManagerEmail = ({ value, onChange }) => {
  return (
    <S.NoticeInput
      type="email"
      value={value}
      onChange={onChange}
      placeholder="이메일을 입력해주세요."
    />
  );
};

export default ManagerEmail;
