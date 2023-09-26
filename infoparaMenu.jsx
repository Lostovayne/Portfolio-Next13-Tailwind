import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navigation = () => {
    const [activeSection, setActiveSection] = useState("");
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const scrollPosition = window.pageYOffset;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 50; // Ajusta el valor 50 según el tamaño de tu menú de navegación

                if (scrollPosition >= sectionTop) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav>
            <ul className="flex">
                <li className={activeSection === "about" ? "bg-yellow-500" : ""}>
                    <Link href="#about">About</Link>
                </li>
                <li className={activeSection === "experience" ? "bg-yellow-500" : ""}>
                    <Link href="#experience">Experience</Link>
                </li>
                <li className={activeSection === "projects" ? "bg-yellow-500" : ""}>
                    <Link href="#projects">Projects</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
