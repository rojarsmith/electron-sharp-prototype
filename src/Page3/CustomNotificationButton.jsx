import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomNotificationButton.css";
import Popup from "../Popup";

const CustomNotificationButton = ({ width = 100, height = 100, icon, title, decoration = false, popup = false, children }) => {
    const navigate = useNavigate();
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleClick = () => {
        if (popup) {
            setIsPopupVisible(true);
        } else {
            navigate("/page2");
        }
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <>
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
            {popup
                &&
                <Popup visible={isPopupVisible} onClose={handleClosePopup}>
                    {children || <p>Default Popup Content</p>}
                </Popup>}
        </>
    );
};

export default CustomNotificationButton;
