import WindowHeader from "@/app/components/WindowHeader";
import WindowContent from "@/app/components/WindowContent";
import WidowObjectCount from "./WindowObjectCount";

export default function Window() {
    return (
        <section className="w-[600px] h-[500px] windows-border-before bg-windows-grey">
            <WindowHeader title="Folder" />
            <WindowContent />
            <WidowObjectCount objects={2} />
        </section>
    )
}