import React, { useState, useEffect, useRef } from "react";
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
    onAdd,
    setHighestZIndex,
}) {
    const [fullScreen, setFullScreen] = useState(false);
    const [selectedObject, setSelectedObject] = useState();
    const [position, setPosition] = useState({ left: 0, top: 0 });
    const [isPositioned, setIsPositioned] = useState(false);

    const selectThisWindow = () => {
        onSelectWindow({ name: w.name });
    };

    const ref = useRef(0);

    const headerId = `window-header-${w.name}`;
    const windowId = `window-container-${w.name}`;

    useDragger(headerId, windowId);

    useEffect(() => {
        if (fullScreen) {
            // If fullScreen, position window at top-left corner
            setPosition({ left: 0, top: 0 });
        } else if (!isPositioned) {
            // Position logic for non-fullscreen windows
            const initialOffset = 30;
            let initialX = window.innerWidth / 2 - 300;
            let initialY = window.innerHeight / 2 - 250;

            if (windowCount > 0) {
                initialX += windowCount * initialOffset;
                initialY -= windowCount * initialOffset;
            }

            setPosition({ left: initialX, top: initialY });
            setIsPositioned(true);
        }
    }, [windowCount, isPositioned, fullScreen]);
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
                    onAdd={onAdd}
                    componentRef={ref}
                    setHighestZIndex={setHighestZIndex}
                    highestZIndex={highestZIndex}
                    setSelectedObject={setSelectedObject}
                    w={w}
                    onSelectWindow={onSelectWindow}
                />
                <WidowObjectCount
                    componentRef={ref}
                    w={w}
                    selectedObject={selectedObject}
                />
            </div>
        </section>
    );
}
