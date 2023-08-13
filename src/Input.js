import InputField from "./InputField";
import TipBoard from "./TipBoard";

import dolarImg from "./images/icon-dollar.svg";
import personImg from "./images/icon-person.svg";
import { useState, useEffect } from "react";

const percentList = [5, 10, 15, 25, 50];

function Input({
  billValue,
  setBillValue,
  personValue,
  setPersonValue,
  setTipAmount,
  setTotalAmount,
  setPercentNum,
  customPerc,
  setCustomPerc,
  appActive,
  setAppActive,
  cantBeZero,
}) {
  const handleClick = (number) => {
    if (number && !customPerc && !isNaN(billValue) && !isNaN(personValue)) {
      const tip = (billValue * number) / 100 / personValue;
      const total = billValue / personValue + tip;
      if (tip && total) {
        setTipAmount(tip.toFixed(2));
        setTotalAmount(total.toFixed(2));
      }
      if (tip === Infinity) {
        setTipAmount("0.00");
        setTotalAmount("0.00");
      }
    }
  };

  return (
    <section>
      <InputField
        // initValue=""
        // appActive={appActive}
        setAppActive={setAppActive}
        // setTipAmount={setTipAmount}
        value={billValue}
        setValue={setBillValue}
        title="Bill"
        image={dolarImg}
        type="number"
        min="0"
      />
      <TipBoard
        cantBeZero={cantBeZero}
        appActive={appActive}
        setAppActive={setAppActive}
        customPerc={customPerc}
        setCustomPerc={setCustomPerc}
        setPercentNum={setPercentNum}
        handleClick={(number) => handleClick(number)}
        percentList={percentList}
      />
      <InputField
        cantBeZero={cantBeZero}
        // initValue="1"
        // appActive={appActive}
        setAppActive={setAppActive}
        type="number"
        min="0"
        // setTipAmount={setTipAmount}
        value={personValue}
        // isValueNull={personValue === "0"}
        setValue={setPersonValue}
        title="Number of People"
        image={personImg}
      />
    </section>
  );
}

export default Input;
