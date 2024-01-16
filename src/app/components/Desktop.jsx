"use client";
import React, { useState, useEffect } from "react";

export default function Window() {
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [activeIcon, setActiveIcon] = useState(null);

    const selectIcon = (iconName) => {
        setSelectedIcon(iconName);
    };
    const setActive = (iconName) => {
        setActiveIcon(iconName);
    };

    const isActive = (iconName) => {
        return activeIcon === iconName;
    };
    const isSelected = (iconName) => {
        return selectedIcon === iconName;
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const activeIconElement = activeIcon
                ? document.querySelector(`.icon-button.${activeIcon}`)
                : null;
            const isOutside = activeIconElement
                ? !activeIconElement.contains(event.target)
                : true;

            if (isOutside) {
                setActiveIcon(null);
                setSelectedIcon(null);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <section className="grid row-auto gap-4 p-2">
            <button
                className={`w-[75px] icon-button focus:outline-none relative group ${
                    isActive("computer") ? "blue-filter" : ""
                }`}
                onDoubleClick={() => setActive("computer")}
                onClick={() => selectIcon("computer")}
                onFocus={() => selectIcon("computer")}
            >
                <img
                    src="/images/computer.png"
                    alt="My computer icon"
                    className="p-[5px] select-none"
                />
                <p
                    className={`px-1 leading-none group-focus:border-white text-center text-white border border-transparent border-dotted ${
                        isSelected("computer") ? "border-white" : ""
                    }`}
                >
                    Mike's Computer
                </p>
            </button>
            <button
                className={`w-[75px] icon-button relative focus:outline-none group ${
                    isActive("projects") ? "blue-filter" : ""
                }`}
                onDoubleClick={() => setActive("projects")}
                onClick={() => selectIcon("projects")}
                onFocus={() => selectIcon("projects")}
            >
                <img
                    src="/images/folder.png"
                    alt="Folder icon"
                    className="p-[5px] select-none"
                />
                <p
                    className={`px-1 leading-none group-focus:border-white text-center text-white border border-transparent border-dotted ${
                        isSelected("projects") ? "border-white" : ""
                    }`}
                >
                    My Projects
                </p>
            </button>
            <button
                className={`w-[75px] icon-button relative focus:outline-none group ${
                    isActive("bin") ? "blue-filter" : ""
                }`}
                onDoubleClick={() => setActive("bin")}
                onClick={() => selectIcon("bin")}
                onFocus={() => selectIcon("bin")}
            >
                <img
                    src="/images/bin.png"
                    alt="Recycle bin icon"
                    className="p-[5px] select-none"
                />
                <p
                    className={`px-1 leading-none group-focus:border-white text-center text-white border border-transparent border-dotted ${
                        isSelected("bin") ? "border-white" : ""
                    }`}
                >
                    Recycle Bin
                </p>
            </button>
        </section>
    );
}
