import Image from "next/image";
import CardName from "../ui/cardName";
import CardPhoto from "../ui/cardPhoto";
import CardDescription from "../ui/cardDescription";
import { CircleChevronDown } from "lucide-react";
import CardProjects from "../ui/cardProjects";
import CardTasks from "../ui/cardTasks";
import CardTrajectory from "../ui/cardTrajectory"
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex gap-10 items-center flex-col m-5">
      <div className="flex flex-col gap-6 justify-center items-center h-screen">
        <section className="flex justify-center flex-wrap gap-4">
          <CardPhoto />
          <CardName />
          <CardDescription />
        </section>
        <Link href="/#down">
          <div className="icon-arrow w-20 h-20 mt-5"></div>
        </Link>

      </div>
      <section className="flex flex-col justify-between gap-6 w-[70%] md:flex-row">

        <CardTasks ></CardTasks>
        <CardTrajectory></CardTrajectory>
      </section>
      <section className="w-full  md:w-[70%]">
        <div className="">
          <CardProjects></CardProjects>
        
        </div>

      </section>

    </main>
  );
}
