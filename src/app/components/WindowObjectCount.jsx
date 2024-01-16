"use client"

export default function WidowObjectCount({ objects }) {

    return (
        <div className="grid grid-cols-2 mx-[2px] gap-[2px]">
            <div className="windows-border-small">
                <p className="px-2">{objects} object(s)</p>
            </div>
            <div className="windows-border-small">
            </div>
        </div>
    )
}
