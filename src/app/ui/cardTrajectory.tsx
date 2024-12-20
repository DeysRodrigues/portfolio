import { Button } from "@/components/ui/button";
import Link from "next/link";

const CardTrajectory = () => {
    return (
        <div className=" flex flex-col w-full md:w-[60%]">

            <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex gap-6">
                    <div className="bg-[#2D2541] flex flex-col items-center h-[30rem] w-1 rounded-full ">

                        <div className="bg-[#2D2541] w-7 h-7 rounded-full mb-20 " ></div>
                        <div className="bg-[#2D2541] w-7 h-7 rounded-full mb-20" ></div>
                        <div className="bg-[#2D2541] w-7 h-7 rounded-full mb-20" ></div>
                        <div className="bg-[#2D2541] w-7 h-7 rounded-full " ></div>

                    </div>
                    <div className="flex flex-col px-2">
                        <div className="mt">
                            <span className="text-primary-text">2018</span>
                            <p className="text-secondary text-sm w-full">High school completion</p>
                            <p className="text-primary-text text-xs  w-40">CEAT</p>
                        </div>

                        <div className="mt-12">
                            <span className="text-primary-text">2019</span>
                            <p className="text-secondary text-sm w-full">Higher education course in Physics</p>
                            <p className="text-primary-text text-xs  w-40">UFPI</p>
                            <span className="text-primary-text font-bold text-xs">Curso Incompleto</span>
                        </div>
                        <div className="mt-7">
                            <span className="text-primary-text">2021</span>
                            <p className="text-secondary text-sm w-full">Start front-end studies</p>
                            <p className="text-primary-text text-xs  w-40">sequence of self-taught studies.</p>

                        </div>
                        <div className="mt-8">
                            <span className="text-primary-text">2025</span>
                            <p className="text-secondary text-sm w-full">Software engineering course</p>
                            <p className="text-primary-text text-xs  w-40">Jala University</p>
                        
                        </div>
                    </div>
                </div>

         
            </div>

        </div>
    );
}

export default CardTrajectory;