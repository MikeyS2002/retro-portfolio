import FooterItem from "./FooterItem";
import Time from "./Time";

export default function Footer({ windows, onSelectWindow, selectedWindow }) {
    return (
        <footer className="absolute bottom-0 left-0 z-50 w-full">
            <div className="w-full p-[2px] windows-border-top justify-between flex bg-windows-grey h-10">
                <div className="flex gap-1">
                    <button className="flex mr-[2px] items-center h-full gap-2 px-2 py-1 windows-border button-active">
                        <img
                            className="h-full "
                            src="/images/logo.png"
                            alt="logo"
                        />
                        <p className="header">Start</p>
                    </button>
                    {windows.map((window) => (
                        <FooterItem
                            key={window.name}
                            title={window.name}
                            img={window.iconImg}
                            onSelectWindow={onSelectWindow}
                            window={window}
                            selectedWindow={selectedWindow}
                        />
                    ))}
                </div>
                <button className="h-full gap-2 px-4 py-1 windows-border-small">
                    <p>
                        <Time />
                    </p>
                </button>
            </div>
        </footer>
    );
}
