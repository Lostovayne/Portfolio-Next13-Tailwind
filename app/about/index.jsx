import { Information } from "./components/Information";
import { Sidebar } from "./components/Sidebar";

export const AboutPage = () => {
    return (
        <div className="min-h-screen relative  grid grid-cols-1 md:grid-cols-2">
            <Sidebar />
            <Information />
        </div>
    );
};
