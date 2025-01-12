import React from "react";
import "./Popup.css";

const Popup = ({ visible, onClose, children }) => {
  if (!visible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content"
        onClick={(e) => e.stopPropagation()}>
        {children}

        <button className="popup-close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
