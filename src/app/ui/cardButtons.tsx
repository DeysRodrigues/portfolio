import { Button } from "@/components/ui/button";
import Link from "next/link";

const CardButtons = () => {
    return (
        <div className="">
            <div className="mb-10">
                <Link href="/" target="_blank" rel="noopener noreferrer">
                    <Button className="relative p-7 text-tertiary font-bold">
                        CURRÍCULO PDF
                        <span className="absolute -right-3 -top-2 bottom-2 border-2 w-full rounded-md "></span>
                    </Button>
                </Link>

            </div>
            <div className="mb-10">
                <Link href="/" target="_blank" rel="noopener noreferrer">
                    <Button className="relative p-7 text-tertiary font-extrabold">
                        CURSOS
                        <span className="absolute -right-3 -top-2 bottom-2 border-2 w-full rounded-md "></span>
                    </Button>
                </Link>

            </div>
            <div className="">
                <Link href="/" target="_blank" rel="noopener noreferrer">
                    <Button className="relative p-7 text-tertiary font-bold">
                        CERTIFICADOS
                        <span className="absolute -right-3 -top-2 bottom-2 border-2 w-full rounded-md "></span>
                    </Button>
                </Link>

            </div>
        </div>
    );
}

export default CardButtons;