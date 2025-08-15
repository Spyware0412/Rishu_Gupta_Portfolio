import React from "react";
import "./GradientOutlineButton.css";

export default function GradientOutlineButton({ label = "Hover me", type = "button" }) {
  return (
    <button className="gradient-outline-btn" type={type}>
      {label}
    </button>
  );
}
