// 이름 입력 컴포넌트

import S from "../../uis/RegistUI";

const ManagerName = ({ value, onChange }) => {
  return (
    <S.NoticeInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder="이름을 입력해주세요."
    />
  );
};

export default ManagerName;
