import React, { useEffect, useRef } from "react";

function useDragger(headerId, windowId) {
    const isDragging = useRef(false);
    const coords = useRef({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0,
    });

    useEffect(() => {
        const header = document.getElementById(headerId);
        const windowElement = document.getElementById(windowId);

        if (!header || !windowElement) {
            throw new Error("Element with given id doesn't exist");
        }

        const onMouseDown = (e) => {
            isDragging.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;

            // Initialize lastX and lastY with the window's current position
            coords.current.lastX = parseInt(windowElement.style.left, 10) || 0;
            coords.current.lastY = parseInt(windowElement.style.top, 10) || 0;
        };

        const onMouseUp = () => {
            isDragging.current = false;
            coords.current.lastX = parseInt(windowElement.style.left, 10) || 0;
            coords.current.lastY = parseInt(windowElement.style.top, 10) || 0;
        };

        const onMouseMove = (e) => {
            if (!isDragging.current) return;

            let nextX =
                e.clientX - coords.current.startX + coords.current.lastX;
            let nextY =
                e.clientY - coords.current.startY + coords.current.lastY;

            // Adjusted screen constraints
            const windowRect = windowElement.getBoundingClientRect();
            const maxX = window.innerWidth - windowRect.width / 2;
            const maxY = window.innerHeight - windowRect.height / 2;

            // Allow window to move halfway off the screen horizontally
            if (nextX < -windowRect.width / 2) nextX = -windowRect.width / 2;
            if (nextX > maxX) nextX = maxX;

            // Prevent top of window from going off screen, but allow other sides to go halfway off
            if (nextY < 0) nextY = 0; // Top edge constraint
            if (nextY > maxY) nextY = maxY; // Bottom edge halfway off screen

            windowElement.style.left = `${nextX}px`;
            windowElement.style.top = `${nextY}px`;
        };

        header.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
        document.addEventListener("mousemove", onMouseMove);

        const cleanup = () => {
            header.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("mousemove", onMouseMove);
        };

        return cleanup;
    }, [headerId, windowId]);
}

export default useDragger;
