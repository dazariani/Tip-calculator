import { useState, useEffect } from "react";

function TipPercent({ perc, active, onClick, customPerc, appActive }) {
  return (
    <>
      <div
        onClick={onClick}
        className={`percent-btn ${
          active && !customPerc && appActive ? "active-perc" : null
        }`}
      >
        {perc}%
      </div>
    </>
  );
}

export default TipPercent;
