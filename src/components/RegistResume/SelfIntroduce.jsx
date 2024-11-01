import S from "../../uis/RegistUI";

const SelfIntroduce = ({ value, onChange }) => {
  return (
    <S.ResumeContent
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="나에 대해 자유롭게 설명하고 채용기회의 확률을 높이세요."
    />
  );
};

export default SelfIntroduce;
