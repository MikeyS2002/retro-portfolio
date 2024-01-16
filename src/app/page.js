import Footer from "@/app/components/Footer";
import Window from "@/app/components/Window";
import Desktop from "@/app/components/Desktop";
import WindowHeader from "@/app/components/WindowHeader";

export default function Home() {
    return (
        <main className="relative h-screen">
            <div className="fixed top-0 right-0 w-fit">
                <Window />
            </div>

            <Desktop />

            <Footer />
        </main>
    );
}
