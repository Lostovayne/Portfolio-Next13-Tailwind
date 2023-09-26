import Image from "next/image";
export const ImagenPrincipal = () => {
    return (
        <Image
            src={"/perfil.png"}
            alt="Frank"
            width={150}
            height={150}
            className="max-[700px]:w-[90px] w-[130px] mx-auto "
        />
    );
};
