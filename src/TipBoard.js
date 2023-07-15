import TipPercent from "./TipPercent";
import { useState, useEffect } from "react";

function TipBoard({
  percentList,
  handleClick,
  customPerc,
  setCustomPerc,
  setPercentNum,
  appActive,
  setAppActive,
  cantBeZero,
}) {
  const [percentActive, setPercentActive] = useState("");

  return (
    <section
      style={cantBeZero ? { marginBottom: "28px" } : null}
      className="tipboard-box"
    >
      <p>Select Tip %</p>
      <div className="percent-box">
        {percentList.map((perc, ind) => {
          return (
            <TipPercent
              appActive={appActive}
              customPerc={customPerc}
              active={percentActive === perc}
              onClick={() => {
                setPercentActive(perc);
                handleClick(perc);
                setPercentNum(perc);
                setAppActive(true);
              }}
              key={ind}
              perc={perc}
            />
          );
        })}

        <input
          value={customPerc}
          onChange={(e) => {
            setCustomPerc(e.target.value);
            setAppActive(true);
          }}
          className="percent-input"
          type="text"
          placeholder="Custom"
        />
      </div>
    </section>
  );
}

export default TipBoard;
