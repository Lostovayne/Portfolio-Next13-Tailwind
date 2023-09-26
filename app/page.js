import { AboutPage } from "./about";
import { HomePage } from "./home";

const page = () => {
    return (
        <div className="max-w-6xl mx-auto relative">
            <HomePage />
            <AboutPage />
        </div>
    );
};
export default page;
