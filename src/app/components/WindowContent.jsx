"use client";
import React, { useState, useEffect } from "react";
import Icon from "@/app/components/Icon";

export default function WindowContent({ projects, setSelectedObject, w }) {
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
                setSelectedObject(null);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div className="w-[calc(100%-4px)] h-[calc(100%-66px)] m-[2px] bg-white relative">
            <div className="z-30 flex col-auto gap-4 p-4">
                {projects.map((project, i) => (
                    <Icon
                        key={i}
                        name={project.name}
                        onDoubleClick={() => setActive(project.name)}
                        onClick={() => {
                            selectIcon(project.name);
                            setSelectedObject(project);
                        }}
                        onFocus={() => {
                            selectIcon(project.name);
                            setSelectedObject(project);
                        }}
                        img={project.iconImg}
                        isSelected={isSelected}
                        isActive={isActive}
                        color="black"
                        filter="2"
                    />
                ))}
            </div>
        </div>
    );
}
