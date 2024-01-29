"use client";
export default function WidowObjectCount({ componentRef, w, selectedObject }) {
    return (
        <div className="grid grid-cols-2 mx-[2px] gap-[2px]">
            <div className="windows-border-small">
                <p className="px-2">
                    {componentRef && componentRef.current
                        ? componentRef.current.children.length
                        : 0}{" "}
                    object(s)
                </p>
            </div>
            <div className="windows-border-small">
                <div className="flex items-center gap-1 p-[2px]">
                    <img
                        className="w-5 h-5 p-px"
                        src={
                            selectedObject ? selectedObject.iconImg : w.iconImg
                        }
                        alt="Program icon"
                    />
                    <p>{selectedObject ? selectedObject.name : w.name}</p>
                </div>
            </div>
        </div>
    );
}
