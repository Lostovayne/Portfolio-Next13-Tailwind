import Image from "next/image";
const TextoPrincipal = () => {
    return (
        <div className="font-extrabold relative max-[700px]:text-7xl inline-block tracking-tighter text-transparent text-8xl bg-clip-text bg-gradient-to-b dark:from-[#fde089] dark:to-[#ec8b26] from-[#ffd24e] to-[#b96205] my-4">
            Hola
            <span className="shake-left-right inline-flex">
                <Image
                    src="/wave.webp"
                    alt="Frank"
                    width={80}
                    height={80}
                    className="max-[700px]:w-[60px]"
                />
            </span>
            ,Soy Franco
        </div>
    );
};
export default TextoPrincipal;
