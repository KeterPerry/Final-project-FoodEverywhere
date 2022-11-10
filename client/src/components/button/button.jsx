import React from "react";
import "./button.css";

export default function Button({ buttonText }) {
  return <button className="btn-container">{buttonText}</button>;
}
