import S from "../../uis/RegistUI";

const WorkPay = ({ value, onChange }) => {
  return (
    <div>
      <S.PayInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="예) 12000"
      />
      &nbsp;원
    </div>
  );
};

export default WorkPay;
