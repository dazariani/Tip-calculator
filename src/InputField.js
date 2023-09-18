import { useEffect } from "react";

function InputField({
  title,
  image,
  value,
  setValue,
  onSelect,
  min,
  setAppActive,
  cantBeZero,
  type,
  max,
}) {
  const noteStyle = cantBeZero
    ? { border: "2px solid red", borderRadius: "5px" }
    : null;

  return (
    <div className="bill-box flex-col">
      <label>{title}</label>
      {cantBeZero ? <span className="note">Can’t be zero</span> : null}
      <input
        onSelect={onSelect}
        value={value}
        onChange={(e) => {
          e.target.value >= 0 &&
            !e.target.value.includes(".") &&
            setValue(e.target.value);
          setAppActive(true);
        }}
        style={{
          ...noteStyle,
          background: `url(${image}) no-repeat 10px 50%  #f3f9fa`,
        }}
        type={type}
        placeholder="0"
        min={min}
        maxLength={max}
      />
    </div>
  );
}

export default InputField;
