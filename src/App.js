import Input from "./Input";
import Output from "./Output";
import logoImg from "./images/logo.svg";
import { useState, useEffect } from "react";

function App() {
  const [billValue, setBillValue] = useState("");
  const [personValue, setPersonValue] = useState("0");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");
  const [percentNum, setPercentNum] = useState("");
  const [customPerc, setCustomPerc] = useState("");
  const [appActive, setAppActive] = useState(false);
  const [cantBeZero, setCantBeZero] = useState(false);

  console.log("name");

  // Update UI
  useEffect(() => {
    if (!appActive) {
      setBillValue("");
      setPersonValue("");
      setCustomPerc("");
      setPercentNum("");
      setTipAmount("0.00");
      setTotalAmount("0.00");
    }
  }, [appActive]);

  useEffect(() => {
    if (billValue && (percentNum || customPerc) && personValue === "0") {
      setCantBeZero(true);
    } else {
      setCantBeZero(false);
    }
  }, [billValue, percentNum, customPerc, personValue]);

  return (
    <section className="App">
      <img src={logoImg} alt="logo" />
      <div className="container">
        <Input
          cantBeZero={cantBeZero}
          appActive={appActive}
          setAppActive={setAppActive}
          tipAmount={tipAmount}
          customPerc={customPerc}
          setCustomPerc={setCustomPerc}
          setPercentNum={setPercentNum}
          setTotalAmount={setTotalAmount}
          setTipAmount={setTipAmount}
          personValue={personValue}
          setPersonValue={setPersonValue}
          billValue={billValue}
          setBillValue={setBillValue}
        />
        <Output
          appActive={appActive}
          setAppActive={setAppActive}
          customPerc={customPerc}
          setCustomPerc={setCustomPerc}
          tipAmount={tipAmount}
          totalAmount={totalAmount}
          billValue={billValue}
          personValue={personValue}
          percentNum={percentNum}
          setTipAmount={setTipAmount}
          setTotalAmount={setTotalAmount}
        />
      </div>
    </section>
  );
}

export default App;
