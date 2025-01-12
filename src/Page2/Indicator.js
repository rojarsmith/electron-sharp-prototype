import React from "react";
import "./Indicator.css";

const Indicator = ({ top, left, direction = "row", circles = 3, backgroundColor }) => {
    return (
        <div
            className="indicator"
            style={{
                top: `${top}px`,
                left: `${left}px`,
                flexDirection: direction,
            }}
        >
            {Array.from({ length: circles }).map((_, index) => (
                <div className="indicator-circle" key={index}
                    style={{ backgroundColor: backgroundColor }}></div>
            ))}
        </div>
    );
};

export default Indicator;