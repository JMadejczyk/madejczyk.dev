"use client";
import Footer from "../../components/Footer";
import useSmoothScroll from "@/app/lib/useSmoothScroll";
import Link from "next/link";
import { useFont } from "@/app/components/FontLoader";

const projects = [
  {
    title: " madej.art-nextjs",
    description: "Frontend of photography portfolio website",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/JMadejczyk/madej.art-nextjs",
  },
  {
    title: " madej.art-api",
    description: "Backend for admin panel of photography portfolio website",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/JMadejczyk/API_madej.art",
  },
  {
    title: "covid- statistics-poland",
    description:
      "Discord bot providing daily updates about covid pandemic in Poland",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/JMadejczyk/Covid-statistics-Poland",
  },
  {
    title: " sportPerformance",
    description: "Frontend of website for SportPerformance gym in Poznan",
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
    <div className="w-80 h-60 border-textWhite border-[6px] rounded-3xl">
      <div className="border-b-[4px] border-textWhite h-1/2 flex items-center">
        <div
          className={`w-[65%] flex flex-wrap ${
            title.length > 17
              ? "ml-14"
              : title.length > 15
              ? "ml-[4.5rem]"
              : "ml-20"
          } `}
        >
          <span className={`${font.className} text-2xl`}>JMadejczyk/</span>
          {title.split(" ").map((word) => (
            <span className={`text-textRed ${font.className} text-2xl`}>
              {word}
            </span>
          ))}
        </div>
      </div>

      <Link href={github}>
        <div className="w-full h-1/2 flex items-center">
          <p className={`${font.className} text-xl text-center px-6`}>
            {description}
          </p>
        </div>
      </Link>
    </div>
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
      <main className="min-h-screen">
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
