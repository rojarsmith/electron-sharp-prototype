import React from "react";
import { useNavigate } from "react-router-dom";
import "./CustomNotificationButton.css";

const CustomNotificationButton = ({ width = 100, height = 100, icon, title, decoration = false }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/page2");
    };

    return (
        <div
            className={`custom-notification-button ${decoration ? "decoration" : ""}`}
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
            onClick={handleClick}
        >
            {icon ?
                <div className="button-icon">
                    <img src={icon} alt="Icon" className="icon-image" />
                </div>
                :
                ''
            }
            {title ?
                <div className="button-title">{title}</div>
                :
                ''
            }
            {decoration && <div className="decoration-dot"></div>}
        </div>
    );
};

export default CustomNotificationButton;
