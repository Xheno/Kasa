import React, { useState } from 'react';
import "../style/Dropdown.css";

export default function Dropdown({ className="", title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`dropdown ${className}`}>
      <button className="dropdown-toggle" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span>{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="dropdown-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}
