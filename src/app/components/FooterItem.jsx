import React from "react";

const FooterItem = ({ title, img, onSelectWindow, window, selectedWindow }) => {
    return (
        <button
            onClick={() => onSelectWindow(window)}
            className={`${
                selectedWindow && window.name === selectedWindow.name
                    ? "windows-border-reverse"
                    : "windows-border"
            } flex button-active items-center gap-1 windows-border min-w-[200px] px-2`}
        >
            <img className="w-[20px]" src={img} alt={`${window.name} icon`} />
            <p>{title}</p>
        </button>
    );
};

export default FooterItem;
