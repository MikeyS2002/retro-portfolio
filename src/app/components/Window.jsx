import React, { useState, useEffect } from "react";
import WindowHeader from "@/app/components/WindowHeader";
import WindowContent from "@/app/components/WindowContent";
import WidowObjectCount from "./WindowObjectCount";
import useDragger from "@/app/hooks/useDragger";

export default function Window({
    onClose,
    onSelectWindow,
    selectedWindow,
    highestZIndex,
    w,
    windowCount,
}) {
    const [fullScreen, setFullScreen] = useState(false);
    const [selectedObject, setSelectedObject] = useState();
    const [position, setPosition] = useState({ left: 0, top: 0 });
    const [isPositioned, setIsPositioned] = useState(false);

    const projects = [
        { name: "Unveil", iconImg: "/images/unveil.png" },
        { name: "Oger", iconImg: "/images/oger.png" },
        { name: "Genvid", iconImg: "/images/genvid.png" },
    ];

    const selectThisWindow = () => {
        onSelectWindow({ name: w.name });
    };

    const headerId = `window-header-${w.name}`;
    const windowId = `window-container-${w.name}`;

    useDragger(headerId, windowId);

    useEffect(() => {
        // Only set the position if the window has not been positioned yet
        if (!isPositioned) {
            const initialOffset = 30;
            let initialX = window.innerWidth / 2 - 300;
            let initialY = window.innerHeight / 2 - 250;

            if (windowCount > 0) {
                initialX += windowCount * initialOffset;
                initialY -= windowCount * initialOffset;
            }

            setPosition({ left: initialX, top: initialY });
            setIsPositioned(true); // Mark as positioned
        }
    }, [windowCount, isPositioned]);

    return (
        <section
            style={{
                left: `${position.left}px`,
                top: `${position.top}px`,
                zIndex:
                    selectedWindow && w.name === selectedWindow.name
                        ? highestZIndex
                        : 1,
            }}
            onClick={selectThisWindow}
            className="fixed w-fit"
            id={windowId}
        >
            <div
                className={`${
                    fullScreen
                        ? "w-screen h-[calc(100vh-40px)]"
                        : "w-[600px] h-[500px]"
                } windows-border-before bg-windows-grey`}
            >
                <WindowHeader
                    onClose={onClose}
                    w={w}
                    selectedWindow={selectedWindow}
                    setFullScreen={setFullScreen}
                    id={headerId}
                />
                <WindowContent
                    projects={projects}
                    setSelectedObject={setSelectedObject}
                    w={w}
                />
                <WidowObjectCount
                    objects={projects.length}
                    w={w}
                    selectedObject={selectedObject}
                />
            </div>
        </section>
    );
}
