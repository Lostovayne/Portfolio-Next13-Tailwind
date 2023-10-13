import {
    RiLinkedinBoxFill,
    RiGithubFill,
    RiTwitterXFill,
    RiInstagramFill,
} from "react-icons/ri";

export const Footer = () => {
    return (
        <footer className="flex items-center justify-start gap-2">
            <RiLinkedinBoxFill
                size={28}
                className="hover:text-[#fff7ed] cursor-pointer transition-all duration-300  hover:scale-105"
            />
            <RiGithubFill
                size={28}
                className="hover:text-[#fff7ed] cursor-pointer transition-all duration-300  hover:scale-105"
            />
            <RiTwitterXFill
                size={28}
                className="hover:text-[#fff7ed] cursor-pointer transition-all duration-300  hover:scale-105"
            />
            <RiInstagramFill
                size={28}
                className="hover:text-[#fff7ed] cursor-pointer transition-all duration-300  hover:scale-105"
            />
        </footer>
    );
};
