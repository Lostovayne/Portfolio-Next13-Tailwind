import { Experience } from "./MenuList";
import { Footer } from "./Footer";
import { MainInformation } from "./Information";

export const Sidebar = () => {
    return (
        <div className="h-screen space-y-2 text-left w-full max-w-[800px] max-[800px]:static sticky top-0 left-0 max-md:px-6 px-12 flex flex-col justify-evenly ">
            <MainInformation />
            <Experience />
            <Footer />
        </div>
    );
};
