export default function WindowHeader({
    w,
    onClose,
    selectedWindow,
    setFullScreen,
    id,
}) {
    return (
        <header
            className={`flex justify-between relative  p-[2px] items-center w-[calc(100%-4px)] h-6 gap-2 m-[2px] ${
                selectedWindow && w.name === selectedWindow.name
                    ? "bg-windows-blue"
                    : "bg-windows-border-dark-gray"
            }`}
        >
            <div className="absolute w-full h-full over-after" id={id}></div>
            <div className="flex items-center gap-1 h-full p-[2px]">
                <img
                    className="h-full p-px"
                    src={w.iconImg}
                    alt="Program icon"
                />
                <h1 className="text-white header">{w.name}</h1>
            </div>
            <div className="flex h-full gap-[2px] p-px">
                <button className="windows-border button-active-small aspect-square pb-2 h-full bg-windows-grey p-[3px]">
                    <img
                        className="w-full"
                        src="/images/minus.png"
                        alt="Close icon"
                    />
                </button>
                <button
                    onClick={() => setFullScreen((prev) => !prev)}
                    className="windows-border button-active-small aspect-square pb-2 h-full bg-windows-grey p-[3px]"
                >
                    <img
                        className="w-full "
                        src="/images/screensize.png"
                        alt="Close icon"
                    />
                </button>
                <button
                    onClick={onClose}
                    className="windows-border button-active-small aspect-square pb-2 h-full bg-windows-grey p-[3px]"
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
