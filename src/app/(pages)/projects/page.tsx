"use client";
import Footer from "../../components/Footer";
import useSmoothScroll from "@/app/lib/useSmoothScroll";
import Link from "next/link";
import { useFont } from "@/app/components/FontLoader";

const projects = [
  {
    title: " madej.art-nextjs",
    description: "Frontend of photography portfolio website.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/JMadejczyk/madej.art-nextjs",
  },
  {
    title: " madej.art-api",
    description: "Backend for admin panel of photography portfolio website.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/JMadejczyk/API_madej.art",
  },
  {
    title: "covid- statistics-poland",
    description:
      "Discord bot providing daily updates about covid pandemic in Poland.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/JMadejczyk/Covid-statistics-Poland",
  },
  {
    title: " sportPerformance",
    description: "Frontend of website for SportPerformance gym in Poznan.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/JMadejczyk/SportPerformance",
  },
  {
    title: " playground",
    description: "Group of mini projects made only for the sake of fun.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/JMadejczyk/Playground",
  },
  {
    title: " madejczyk.dev",
    description: "The website you’re currently reading.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/JMadejczyk/madejczyk.dev",
  },
];

const Project = ({
  title,
  description,
  tech,
  github,
}: {
  title: string;
  description: string;
  tech: string[];
  github: string;
}) => {
  const font = useFont("MontrealMedium");

  return (
    <Link href={github} target="blank">
      <div className="w-72 h-52 border-textWhite border-[6px] rounded-3xl hover:scale-105 duration-500">
        <div className="border-b-[3.5px] border-textWhite h-1/2 flex items-center">
          <div
            className={`w-[65%] flex flex-wrap ${
              title.length > 17
                ? "ml-12"
                : title.length > 15
                ? "ml-16"
                : "ml-20"
            } `}
          >
            <span className={`${font.className} text-xl h-6`}>JMadejczyk/</span>
            {title.split(" ").map((word) => (
              <span className={`text-textRed ${font.className} text-xl h-6`}>
                {word}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full h-1/2 flex items-center">
          <p className={`${font.className} text-lg text-center px-6 leading-6`}>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  useSmoothScroll();
  const font = useFont("MontrealMedium");

  return (
    <div>
      <h1
        className={`${font.className} text-5xl text-center my-14 text-textWhite`}
      >
        Projects
      </h1>
      <main className="min-h-screen mb-10 md:mb-0">
        <div className=" grid md:grid-cols-2 gap-6 w-fit mx-auto">
          <Project {...projects[0]} />
          <Project {...projects[1]} />
          <Project {...projects[2]} />
          <Project {...projects[3]} />
          <Project {...projects[4]} />
          <Project {...projects[5]} />
        </div>
      </main>

      <Footer />
    </div>
  );
};
export default Projects;
