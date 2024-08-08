
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Circle, Folder, Instagram, Search } from "lucide-react";
import Image from "next/image";

const CardProjects = () => {
    return (

        <div className=" flex flex-col ">
            {/* header */}
            <div className="bg-secondary flex justify-between p-3 rounded-ss-2xl rounded-se-2xl ">
                <div className="flex items-center gap-2">
                    <Circle size={20} color="#ffffff" strokeWidth={1.5} />
                    <Circle size={20} color="#ffffff" strokeWidth={1.5} />
                    <h2 className="text-primary-text text-xl font-bold ">PROJETOS</h2>
                </div>
                <form action="" className="bg-primary-text flex w-[40%] rounded-2xl">
                    <input type="text" className="rounded-2xl w-full" />
                    <Search size={28} color="#6574ff" strokeWidth={3} />
                </form>


            </div>
            {/* body */}
            <div className="flex flex-wrap justify-center md:flex-nowrap">
                {/* name pastes */}
                <div className="bg-[#2D2541] w-full p-3 py-10 md:w-[30%]">
                    <Accordion type="single" collapsible className="w-full text-primary-text text-sm ">
                        <AccordionItem value="item-1">
                            <AccordionTrigger> <Folder size={20} strokeWidth={1.5} className="text-primary-text" />Profissionais</AccordionTrigger>
                            <AccordionContent>
                                Jujuba
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger><Folder size={20} strokeWidth={1.5} className="text-primary-text" /> Pessoais</AccordionTrigger>
                            <AccordionContent>
                                Yes. It comes with default styles that matches the other
                                components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger><Folder size={20} strokeWidth={1.5} className="text-primary-text" /> Em equipe</AccordionTrigger>
                            <AccordionContent>
                                Yes. It&apos;s animated by default, but you can disable it if you
                                prefer.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="bg-[#110e18c7] flex flex-col gap-3 p-2 md:p-9 w-full md:w-[90%]">

                    <div className="flex justify-between ">
                        <div className="flex flex-col rounded-2xl border-2 ">
                            <div className="flex pb-4 pt-2 p-1">
                                <Circle size={20} color="#ffffff" strokeWidth={1.5} />
                                <Circle size={20} color="#ffffff" strokeWidth={1.5} />
                                <Circle size={20} color="#ffffff" strokeWidth={1.5} />
                            </div>
                            <Image alt="imagem projeto" src="/pollen.jpg" width="300" height="200" className="rounded-b-2xl" ></Image>
                        </div>
                        <div className="flex gap-4 flex-col items-end">
                            <Button>Link Deploy</Button>
                            <Button>Github</Button>
                            <Button>PDF Curriculo</Button>
                        </div>
                    </div>

                    <div className="text-primary-text flex gap-9">
                        <p className="text-sm">
                            Description: Of course! Here’s a fictional text in first person about a junior front-end developer and illustrator who codes with creativity:
                            My Journey as a Front-end Developer: Where Code Meets Creativi isn’t just about functionality.
                        </p>
                        <div className="text-end">
                            <Badge>Next</Badge>
                            <Badge>Tailwind</Badge>
                            <Badge>TypeScript</Badge>
                        </div>
                    </div>
                    <div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default CardProjects;