"use client";
import React, { useState, useEffect } from "react";
import Icon from "@/app/components/Icon";

export default function WindowContent({
    setSelectedObject,
    w,
    componentRef,
    onAdd,
    highestZIndex,
    setHighestZIndex,
    onSelectWindow,
}) {
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [activeIcon, setActiveIcon] = useState(null);

    const projects = [
        { name: "Unveil", iconImg: "/images/unveil.png" },
        { name: "Oger", iconImg: "/images/oger.png" },
        { name: "Genvid", iconImg: "/images/genvid.png" },
    ];

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

    const handleIconDoubleClick = (project) => {
        setActiveIcon(project.name);
        setSelectedObject(project);
        onAdd({
            name: project.name,
            iconImg: project.iconImg,
            content: "project-window",
            zIndex: highestZIndex + 1,
        });
        onSelectWindow({
            name: project.name,
            iconImg: project.iconImg,
            content: "project-window",
            zIndex: highestZIndex + 1,
        });
        setHighestZIndex(highestZIndex + 1);
    };

    return (
        <div className="w-[calc(100%-4px)] h-[calc(100%-66px)] m-[2px] bg-white relative">
            <div ref={componentRef} className="z-30 flex col-auto gap-4 p-4">
                {w.content === "projects" && (
                    <>
                        {projects.map((project, i) => (
                            <Icon
                                on
                                key={i}
                                name={project.name}
                                onDoubleClick={() =>
                                    handleIconDoubleClick(project)
                                }
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
                    </>
                )}
            </div>
        </div>
    );
}
