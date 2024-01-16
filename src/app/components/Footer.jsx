import Time from "./Time";

export default function Footer() {
    return (
        <footer className="absolute bottom-0 left-0 w-full">
            <div className="w-full p-[2px] windows-border-top justify-between flex bg-windows-grey h-10">
                <button className="flex items-center h-full gap-2 px-2 py-1 windows-border windows-border-hover">
                    <img className="h-full " src="/images/logo.png" alt="logo" />
                    <p className="header">Start</p>
                </button>
                <button className="h-full gap-2 px-4 py-1 windows-border-small">
                    <p><Time /></p>
                </button>
            </div>
        </footer>
    )
}
