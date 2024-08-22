import { Button } from "@/components/ui/button";
import Link from "next/link";

const CardTrajectory = () => {
    return (
        <div className=" flex flex-col w-full md:w-[50%]">

            <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex gap-6">
                    <div className="bg-[#2D2541] flex flex-col items-center h-96 w-1 rounded-full ">

                        <div className="bg-[#2D2541] w-7 h-7 rounded-full mb-20 " ></div>
                        <div className="bg-[#2D2541] w-7 h-7 rounded-full mb-40" ></div>
                        <div className="bg-[#2D2541] w-7 h-7 rounded-full " ></div>

                    </div>
                    <div className="flex flex-col px-2">
                        <div className="mt-2">
                            <span className="text-primary-text">2018</span>
                            <p className="text-secondary text-sm w-full">High school completion</p>
                            <p className="text-primary-text text-xs  w-40">CEAT - Centro de educação em tempo integral Antonio Freitas</p>
                        </div>

                        <div className="mt-3">
                            <span className="text-primary-text">2019</span>
                            <p className="text-secondary text-sm w-full">Higher education course in Physics</p>
                            <p className="text-primary-text text-xs  w-40">UFPI - Universidade Federal do Piauí</p>
                            <span className="text-primary-text font-bold text-xs">Curso Incompleto</span>
                        </div>
                        <div className="mt-">
                            <span className="text-primary-text">2021</span>
                            <p className="text-secondary text-sm w-full">Start front-end studies</p>
                            <p className="text-primary-text text-xs  w-40">sequence of self-taught studies through online courses.</p>

                        </div>
                    </div>
                </div>

                <div className="">
                    <Link href="/curriculo-deys.pdf"  target="_blank" rel="noopener noreferrer">
                    <Button className="relative p-7 text-tertiary font-bold">
                        CURRÍCULO PDF
                        <span className="absolute -right-3 -top-2 bottom-2 border-2 w-full rounded-md "></span>
                    </Button>
                    </Link>
                   
                </div>
            </div>

        </div>
    );
}

export default CardTrajectory;