import React from "react";

export default function Desktop({
    name,
    onDoubleClick,
    onClick,
    onFocus,
    img,
    isActive,
    isSelected,
    color = "white",
    filter = "1",
}) {
    return (
        <button
            className={`w-[75px] icon-button focus:outline-none relative group over-after ${
                isActive(`${name}`) ? `blue-filter-${filter}` : ""
            }`}
            onDoubleClick={onDoubleClick}
            onClick={onClick}
            onFocus={onFocus}
        >
            <img
                src={img}
                alt={`${name} icon`}
                className="p-[5px] select-none"
            />
            {color === "white" && (
                <p
                    className={`px-1 leading-none group-focus:border-white text-center text-white border border-transparent border-dotted ${
                        isSelected({ name }) ? `border-white` : ""
                    }`}
                >
                    {name}
                </p>
            )}
            {color === "black" && (
                <p
                    className={`px-1 leading-none group-focus:border-black text-center text-black border border-transparent border-dotted ${
                        isSelected({ name }) ? `border-black` : ""
                    }`}
                >
                    {name}
                </p>
            )}
        </button>
    );
}
