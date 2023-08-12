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
          setValue(e.target.value);
          setAppActive(true);
        }}
        style={{
          ...noteStyle,
          background: `url(${image}) no-repeat 10px 50%  #f3f9fa`,
        }}
        type="number"
        placeholder="0"
        min={min}
      />
    </div>
  );
}

export default InputField;
