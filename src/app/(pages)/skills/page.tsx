"use client";
import Footer from "../../components/Footer";
import useSmoothScroll from "@/app/lib/useSmoothScroll";
import Skill from "./skill";
import { useState } from "react";

import { useFont } from "@/app/components/FontLoader";

const SkillsPage = () => {
  useSmoothScroll();
  const font = useFont("MontrealMedium");
  // const [iconHovered, setIconHovered] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState({
    skillName: "",
    skillDescription: "",
  });
  console.log("render");
  // console.log(iconHovered);
  return (
    <>
      <Floating hoveredSkill={hoveredSkill} />

      <div>
        <main className="min-h-screen flex flex-col justify-center">
          <h1
            className={`${font.className} text-2xl text-center my-16 w-80 lg:w-fit mx-auto text-textWhite`}
          >
            Technologies which I&apos;ve used and am familiar with
          </h1>
          <div className="flex gap-16 flex-col items-center lg:flex-row justify-center">
            <div className="grid grid-cols-3 gap-5 w-fit">
              {skillImages.map((skillImage, index) => (
                <div
                  key={skills[index]}
                  onMouseEnter={() => {
                    setHoveredSkill({
                      skillName: skills[index],
                      skillDescription: skillsDescriptions[index],
                    });
                  }}
                  onMouseLeave={() => {
                    setHoveredSkill({ skillName: "", skillDescription: "" });
                  }}
                >
                  <Skill
                    skillImage={skillImage}
                    skill={skills[index]}
                    variant={index == 4 ? "dark" : ""}
                  />
                </div>
              ))}
            </div>
            <div
              className="grid grid-cols-3 gap-5 w-fit"
              onMouseOver={(e) => {
                e.stopPropagation();
              }}
            >
              {skillImages2.map((skillImage, index) => (
                <div
                  key={skills2[index]}
                  onMouseEnter={() => {
                    setHoveredSkill({
                      skillName: skills2[index],
                      skillDescription: skillsDescriptions2[index],
                    });
                  }}
                  onMouseLeave={() => {
                    setHoveredSkill({ skillName: "", skillDescription: "" });
                  }}
                >
                  <Skill
                    skillImage={skillImage}
                    skill={skills2[index]}
                    variant={index == 4 ? "dark" : ""}
                  />
                </div>
              ))}
            </div>
          </div>
          <p
            className={`${font.className} text-xl text-center my-16 w-60 lg:w-fit mx-auto text-textWhite `}
          >
            (Probably not up to date. Still learnin’ sth)
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SkillsPage;

import typeScript from "@/../public/icons/typeScript.svg";
import react from "@/../public/icons/react.svg";
import javaScript from "@/../public/icons/javaScript.svg";
import framerMotion from "@/../public/icons/framerMotion.svg";
import nodeJs from "@/../public/icons/nodeJs.svg";
import nextJs from "@/../public/icons/nextJs.svg";
import html5 from "@/../public/icons/html5.svg";
import tailwind from "@/../public/icons/tailwind.svg";
import css from "@/../public/icons/css.svg";
import python from "@/../public/icons/python.svg";
import github from "@/../public/icons/github.svg";
import expressJs from "@/../public/icons/expressJs.svg";
import sqlite from "@/../public/icons/sqlite.svg";
import nginx from "@/../public/icons/nginx.svg";
import sql from "@/../public/icons/sql.svg";
import docker from "@/../public/icons/docker.svg";
import linux from "@/../public/icons/linux.svg";
import git from "@/../public/icons/git.svg";
import Floating from "./floating";

const skillImages = [
  typeScript,
  react,
  javaScript,
  framerMotion,
  nodeJs,
  nextJs,
  html5,
  tailwind,
  css,
];

const skillImages2 = [
  python,
  github,
  expressJs,
  sqlite,
  nginx,
  sql,
  docker,
  linux,
  git,
];

const skills = [
  "TypeScript",
  "React",
  "JavaScript",
  "Framer Motion",
  "Node.js",
  "Next.js",
  "HTML5",
  "Tailwind CSS",
  "CSS",
];

const skillsDescriptions = [
  "Better JavaScript with types, what more could you ask for? My projects are mostly written using it.",
  "React is my go-to library for building user interfaces. Used it in many projects.",
  "The language I started my journey with. I still use it in some projects. ",
  "Great library for awesome spring physics based animations. I use it in my projects.",
  "A runtime environment for JavaScript. Used it many times.",
  "Great framework for React. My favourite for server-side rendering.",
  'The "language" of the web. Used it partially in every project.',
  "Utility-first CSS framework. I recently fall in love with it and use it daily.",
  "Cascading Style Sheets. It doesn't need an introduction.",
];

const skills2 = [
  "Python",
  "GitHub",
  "Express.js",
  "SQLite",
  "Nginx",
  "SQL",
  "Docker",
  "Linux",
  "Git",
];

const skillsDescriptions2 = [
  "Great language for data science and machine learning. My favourite some time ago.",
  "The place where my projects live. I use it daily.",
  "Great framework for building APIs. Used it in some projects.",
  "A simple SQL relational database engine. It allows you to store database as a file.",
  "A web server. I use it mostly for reverse proxy.",
  "Structured Query Language. I use it to communicate with databases.",
  "A platform for building, shipping, and running applications in containers. Used it in some projects.",
  "An open-source operating system. I use it on my server.",
  "A distributed version control system. Used it in every project.",
];
