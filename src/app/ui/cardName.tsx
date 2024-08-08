import { Github, Instagram, Linkedin } from "lucide-react";
import { Poller_One } from "next/font/google";

const poller = Poller_One({
    subsets: ['latin'],
    weight: '400'
})

const CardName = () => {

    return (
        <div className="flex flex-col gap-3 bg-tertiary p-12 py-15 rounded-2xl text-end">
            <div className={`${poller.className} text-primary-text text-2xl `}>
                <span className="block">
                    Deys
                </span>
                <span>
                    Rodrigues
                </span>
            </div>
         
            <span className="text-primary-text">Dev Front-end</span>
            <div className=" w-full flex flex-col items-end gap-1">
            <Github className="text-primary-text"/>
            <Linkedin className="text-secondary" />
            <Instagram className="text-secondary" />

            </div>

        </div>);
}

export default CardName;