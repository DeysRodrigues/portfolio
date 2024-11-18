import Image from "next/image";

const CardPhoto = () => {
    return (
        <div className="border-[0.5px] rounded-full ">
            <Image src="/images/deys-photo.jpg" alt="Deys Foto" width={270} height={270} className="rounded-full">
            </Image>
        </div>

    );
}

export default CardPhoto;