
"use client"
import React, { useState } from 'react';

export default function WindowContent() {
    const [selectedIcon, setSelectedIcon] = useState(null);

    const selectIcon = (iconName) => {
        setSelectedIcon(iconName);
    }

    const isSelected = (iconName) => {
        return selectedIcon === iconName;
    }

    return (
        <div className="w-[calc(100%-4px)] h-[calc(100%-62px)] m-[2px] bg-white relative">
            <div className="z-30 flex col-auto gap-4 p-4">
                <div className="w-[75px] over-after" onClick={() => { selectIcon('unveil') }}>
                    <img src="/images/unveil.png" alt="Unveil icon" className="p-[5px]" />
                    <p className={`px-1 leading-none text-center text-black border border-transparent border-dotted ${isSelected('unveil') ? '!border-black' : ''}`}>Unveil</p>
                </div>
                <div className="w-[75px] over-after" onClick={() => selectIcon('oger')}>
                    <img src="/images/oger.png" alt="Oger icon" className="p-[5px]" />
                    <p className={`px-1 leading-none text-center text-black border border-transparent border-dotted ${isSelected('oger') ? '!border-black' : ''}`}>Oger</p>
                </div>
                <div className="w-[75px] over-after" onClick={() => selectIcon('genvid')}>
                    <img src="/images/genvid.png" alt="Genvid icon" className="p-[5px]" />
                    <p className={`px-1 leading-none text-center text-black border border-transparent border-dotted ${isSelected('genvid') ? '!border-black' : ''}`}>Genvid</p>
                </div>
            </div>
        </div>
    )
}