import React from "react";
import "./ClickPanel.css";

function ClickPanel({ message, bgColor, textColor }) {
  console.log("message:", message);
  console.log("bgColor:", bgColor);
  console.log("textColor:", textColor);

  return (
    <>
      <div className="Click-Panel">{message}</div>
    </>
  );
}

export default ClickPanel;