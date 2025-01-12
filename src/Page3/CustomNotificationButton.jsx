import React from "react";
import { useNavigate } from "react-router-dom";
import "./CustomNotificationButton.css";

const CustomNotificationButton = ({ width = 100, height = 100, icon, title, decoration = false }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/page2"); // 跳转到 Page2
    };

    return (
        <div
            className="custom-notification-button"
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
            onClick={handleClick}
        >
            <div className="button-icon">{icon}</div>
            <div className="button-title">{title}</div>

            {decoration && <div className="decoration-dot"></div>}
        </div>
    );
};

export default CustomNotificationButton;
