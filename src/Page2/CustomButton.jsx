import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomButton.css";

const CustomButton = ({ icon, title, status1, status2, data, percentage, backgroundColor }) => {
    const [isPressed, setIsPressed] = useState(false);
    const navigate = useNavigate();

    const calculateArc = () => {
        return (percentage / 100) * 360;
    };

    const handleMouseDown = () => {
        setIsPressed(true);
    };

    const handleMouseUp = () => {
        setIsPressed(false);
        navigate("/page3");
    };

    return (
        <div className={`custom-button`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{ backgroundColor: backgroundColor }}>
            <div className="icon">
                <img src={icon} alt="Icon" className="icon-image" />
            </div>
            <div className="title">{title}</div>
            <div className="arrow">&gt;</div>
            <div className="status-container">
                {status1 ?
                    <div className="status">{status1}</div>
                    :
                    ''}
                {status2 ?
                    <div className="status">{status2}</div>
                    :
                    ''}
            </div>
            {data ?
                <div className="data">{data}</div>
                :
                ''}
            {percentage ?
                <div>
                    <div className="circle">
                        <svg className="arc-svg" viewBox="0 0 36 36">
                            <circle
                                className="background-circle"
                                cx="18"
                                cy="18"
                                r="16"
                            />
                            <circle
                                className="arc"
                                cx="18"
                                cy="18"
                                r="16"
                                strokeDasharray="100 100"
                                strokeDashoffset={`${100 - (percentage / 100) * 100}`}
                            />
                        </svg>
                        <div className="percentage-text">{percentage}%</div>
                    </div>
                </div>
                :
                ''
            }
        </div>
    );
};

export default CustomButton;