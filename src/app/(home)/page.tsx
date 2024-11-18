import Image from "next/image";
import CardName from "../ui/cardName";
import CardPhoto from "../ui/cardPhoto";
import CardDescription from "../ui/cardDescription";
import { CircleChevronDown } from "lucide-react";
import CardProjects from "../ui/cardProjects";
import CardTasks from "../ui/cardTasks";
import CardTrajectory from "../ui/cardTrajectory"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CardButtons from "../ui/cardButtons";


export default function Home() {
  return (
    <main className="flex gap-10 items-center flex-col m-5">
      <section className="flex flex-col gap-6 mb-20  justify-center items-center md:h-screen">
        <section className="flex flex-col justify-center items-center flex-wrap gap-5 md:flex-row">
          <CardPhoto />
          <CardName />
          <CardDescription />
        </section>

        <Link href="/#down">
          <div className="icon-arrow row w-20 h-20 mt-5"></div>
        </Link>


      </section>

      <section className="flex flex-col justify-center items-center   w-[70%] md:flex-row md:px-32">

        <CardTrajectory></CardTrajectory>
        <CardButtons></CardButtons>

      </section>

      <section className="w-full flex-col md:w-[70%] md:flex-row">
   
          <CardProjects></CardProjects>

      
   
      </section>
      <CardTasks ></CardTasks>

    </main>
  );
}
