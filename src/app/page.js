"use client";
import React, { useEffect, useState } from "react";

import Footer from "@/app/components/Footer";
import Window from "@/app/components/Window";
import Desktop from "@/app/components/Desktop";
import WindowHeader from "@/app/components/WindowHeader";

export default function Home() {
    const [windows, setWindows] = useState([]);
    const [selectedWindow, setSelectedWindow] = useState(null);
    const [highestZIndex, setHighestZIndex] = useState(0);

    const handleClose = (windowName) => {
        setWindows(windows.filter((window) => window.name !== windowName));
    };

    const addWindow = (newWindow) => {
        // Check if a window with the same name already exists
        const exists = windows.some((window) => window.name === newWindow.name);

        if (!exists) {
            // If it doesn't exist, add it to the state
            setWindows([
                ...windows,
                { ...newWindow, zIndex: highestZIndex + 1 },
            ]);
            setHighestZIndex(highestZIndex + 1);
        }
    };

    const onSelectWindow = (window) => {
        // Check if the window is already selected
        if (!selectedWindow || selectedWindow.name !== window.name) {
            setSelectedWindow(window);
        }
    };

    useEffect(() => {
        console.log(selectedWindow);
    }, [selectedWindow]);

    return (
        <main className="relative h-screen">
            <Desktop
                onAdd={addWindow}
                onSelectWindow={onSelectWindow}
                highestZIndex={highestZIndex}
                setHighestZIndex={setHighestZIndex}
            />
            {windows.map((w, i) => (
                <Window
                    onAdd={addWindow}
                    setHighestZIndex={setHighestZIndex}
                    key={w.name}
                    onClose={() => handleClose(w.name)}
                    onSelectWindow={onSelectWindow}
                    selectedWindow={selectedWindow}
                    highestZIndex={highestZIndex}
                    w={w}
                    windowCount={i + 1}
                />
            ))}
            <Footer
                windows={windows}
                onSelectWindow={onSelectWindow}
                selectedWindow={selectedWindow}
            />
        </main>
    );
}
