import { useEffect } from "react";
import OutputField from "./OutputField";

function Output({
  tipAmount,
  totalAmount,
  billValue,
  personValue,
  percentNum,
  setTipAmount,
  setTotalAmount,
  customPerc,
  appActive,
  setAppActive,
}) {
  useEffect(() => {
    if (percentNum) {
      const tip = (billValue * percentNum) / 100 / personValue;
      const total = billValue / personValue + tip;
      if (percentNum && !isNaN(tip) && tip !== Infinity) {
        setTipAmount(tip.toFixed(2));
        setTotalAmount(total.toFixed(2));
      }
      if (tip === Infinity) {
        setTipAmount("0.00");
        setTotalAmount("0.00");
      }
    }
    if (customPerc) {
      const tip = (billValue * customPerc) / 100 / personValue;
      const total = billValue / personValue + tip;
      if (customPerc && !isNaN(tip) && !isNaN(total) && tip !== Infinity) {
        setTipAmount(tip.toFixed(2));
        setTotalAmount(total.toFixed(2));
      }
      if (tip === Infinity) {
        setTipAmount("0.00");
        setTotalAmount("0.00");
      }
    }
  }, [billValue, personValue, customPerc]);

  return (
    <section className="output-box">
      <OutputField title="Tip Amount" value={tipAmount} />
      <OutputField title="Total" value={totalAmount} />
      <button
        onClick={() => setAppActive(false)}
        className={`btn ${appActive ? "active-reset" : null}`}
        type="submit"
      >
        RESET
      </button>
    </section>
  );
}

export default Output;
