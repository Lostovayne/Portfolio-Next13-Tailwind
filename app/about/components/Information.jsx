import About from "./About";
import ExperienceCards from "./ExperienceCards";
import Projects from "./ProjectsCards";

export const Information = () => {
    return (
        <div className="max-md:px-6 px-12 text-[#A3A3A3] flex flex-col justify-between">
            <About />
            <ExperienceCards />
            <Projects />
        </div>
    );
};
