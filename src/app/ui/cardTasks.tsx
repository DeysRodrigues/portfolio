import { Progress } from "@/components/ui/progress";
import { CodeXml } from "lucide-react";
import { Poller_One } from "next/font/google";

const poller = Poller_One({
    subsets: ['latin'],
    weight: '400'
})
const CardTasks = () => {
    return (
        <div className="bg-[#2D2541] rounded-2xl py-8 md:w-[50%]" >
            <div className="bg-primary-text flex flex-col gap-6 p-9">
                <h2 className={`${poller.className} text-secondary text-xl text-center `}>
                    LANGUAGES <br /> & FRAMEWORKS
                </h2>
                <div>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center justify-between">
                            <div className="bg-[#2D2541] flex justify-center items-center rounded-full w-8 h-8 border-2 border-secondary ">
                                <CodeXml size={20} color="#6574FF" strokeWidth={1.5} />
                            </div>
                            <div className="w-[80%]">
                                <span className="font-bold text-sm">Html, Css e Js</span>
                                <Progress value={90} />
                            </div>
                        </li>
                        <li className="flex items-center justify-between">
                            <div className="bg-[#2D2541] flex justify-center items-center rounded-full w-8 h-8 border-2 border-secondary ">
                                <CodeXml size={20} color="#6574FF" strokeWidth={1.5} />
                            </div>
                            <div className="w-[80%]">
                                <span className="font-bold text-sm">Next.js</span>
                                <Progress value={5980} />
                            </div>
                        </li>
                        <li className="flex items-center justify-between">
                            <div className="bg-[#2D2541] flex justify-center items-center rounded-full w-8 h-8 border-2 border-secondary ">
                                <CodeXml size={20} color="#6574FF" strokeWidth={1.5} />
                            </div>
                            <div className="w-[80%]">
                                <span className="font-bold text-sm">React</span>
                                <Progress value={70} />
                            </div>
                        </li>
                        <li className="flex items-center justify-between">
                            <div className="bg-[#2D2541] flex justify-center items-center rounded-full w-8 h-8 border-2 border-secondary ">
                                <CodeXml size={20} color="#6574FF" strokeWidth={1.5} />
                            </div>
                            <div className="w-[80%]">
                                <span className="font-bold text-sm">Tailwind</span>
                                <Progress value={70} />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default CardTasks;