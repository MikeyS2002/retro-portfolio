export default function WindowHeader({ title, onClose, selectedWindow }) {
    return (
        <header
            className={`flex justify-between p-[2px] items-center w-[calc(100%-4px)] h-6 gap-2 m-[2px] ${
                selectedWindow && title === selectedWindow.name
                    ? "bg-windows-blue"
                    : "bg-windows-border-dark-gray"
            }`}
        >
            <div className="flex items-center gap-1 h-full p-[2px]">
                <img
                    className="h-full p-px"
                    src="/images/folder.png"
                    alt="Program icon"
                />
                <h1 className="text-white header">{title}</h1>
            </div>
            <div className="flex h-full gap-[2px] p-px">
                <button className="windows-border aspect-square pb-2 windows-border-hover h-full bg-windows-grey p-[3px]">
                    <img
                        className="w-full"
                        src="/images/minus.png"
                        alt="Close icon"
                    />
                </button>
                <button className="windows-border aspect-square pb-2 windows-border-hover h-full bg-windows-grey p-[3px]">
                    <img
                        className="w-full "
                        src="/images/screensize.png"
                        alt="Close icon"
                    />
                </button>
                <button
                    onClick={onClose}
                    className="windows-border aspect-square pb-2 windows-border-hover h-full bg-windows-grey p-[3px]"
                >
                    <img
                        className="w-full"
                        src="/images/close.png"
                        alt="Close icon"
                    />
                </button>
            </div>
        </header>
    );
}
