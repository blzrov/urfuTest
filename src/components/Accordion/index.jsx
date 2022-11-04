import React, { useState } from "react";
import "./Accordion.scss";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="accordion_header"
      >
        <span>{title}</span>
        <svg
          className={!isOpen ? "open" : null}
          width="33"
          height="19"
          viewBox="0 0 33 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 17.3027L16.5 1.80274L1 17.3027"
            stroke="#7F7F7F"
            strokeWidth="2"
          />
        </svg>
      </div>
      {isOpen && <div className="accordion_body">{children}</div>}
    </div>
  );
}
