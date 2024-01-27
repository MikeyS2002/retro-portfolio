"use client";
import React, { useState, useEffect } from "react";
import Icon from "./Icon";

export default function Desktop({
    onAdd,
    onSelectWindow,
    setHighestZIndex,
    highestZIndex,
}) {
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

    const handleDoubleClick = (windowData) => {
        setActive(windowData.name);
        onAdd({
            ...windowData,
            zIndex: highestZIndex + 1,
        });
        onSelectWindow({
            ...windowData,
            zIndex: highestZIndex + 1,
        });
        setHighestZIndex(highestZIndex + 1);
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
            <Icon
                name="Mike's Computer"
                onDoubleClick={() =>
                    handleDoubleClick({
                        name: "Mike's Computer",
                        iconImg: "/images/computer.png",
                        content: "computer",
                    })
                }
                onClick={() => selectIcon("Mike's Computer")}
                onFocus={() => selectIcon("Mike's Computer")}
                img="/images/computer.png"
                isSelected={isSelected}
                isActive={isActive}
            />
            <Icon
                name="My Projects"
                onDoubleClick={() =>
                    handleDoubleClick({
                        name: "My Projects",
                        iconImg: "/images/folder.png",
                        content: "projects",
                    })
                }
                onClick={() => selectIcon("My Projects")}
                onFocus={() => selectIcon("My Projects")}
                img="/images/folder.png"
                isSelected={isSelected}
                isActive={isActive}
            />
            <Icon
                name="Recycle Bin"
                onDoubleClick={() =>
                    handleDoubleClick({
                        name: "Recycle Bin",
                        iconImg: "/images/bin.png",
                        content: "bin",
                    })
                }
                onClick={() => selectIcon("Recycle Bin")}
                onFocus={() => selectIcon("Recycle Bin")}
                img="/images/bin.png"
                isSelected={isSelected}
                isActive={isActive}
            />
        </section>
    );
}
