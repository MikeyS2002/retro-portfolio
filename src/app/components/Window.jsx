import React, { useEffect } from "react";
import WindowHeader from "@/app/components/WindowHeader";
import WindowContent from "@/app/components/WindowContent";
import WidowObjectCount from "./WindowObjectCount";

export default function Window({
    title,
    onClose,
    onSelectWindow,
    selectedWindow,
    highestZIndex,
}) {
    const projects = [
        { name: "Unveil", img: "/images/unveil.png" },
        { name: "Oger", img: "/images/oger.png" },
        { name: "Genvid", img: "/images/genvid.png" },
    ];

    const selectThisWindow = () => {
        onSelectWindow({ name: title });
    };

    return (
        <section
            style={{
                zIndex:
                    selectedWindow && title === selectedWindow.name
                        ? highestZIndex
                        : 1,
            }}
            onClick={selectThisWindow}
            className="!fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit"
        >
            <div className="w-[600px] h-[500px] windows-border-before bg-windows-grey">
                <WindowHeader
                    onClose={onClose}
                    title={title}
                    selectedWindow={selectedWindow}
                />
                <WindowContent projects={projects} />
                <WidowObjectCount objects={projects.length} />
            </div>
        </section>
    );
}
