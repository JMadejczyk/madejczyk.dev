"use client";
import Footer from "../../components/Footer";
import useSmoothScroll from "@/app/lib/useSmoothScroll";
import Skill from "./skill";
import { useState } from "react";

import { useFont } from "@/app/components/FontLoader";

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
  "typeScript",
  "react",
  "javaScript",
  "framerMotion",
  "nodeJs",
  "nextJs",
  "html5",
  "tailwind",
  "css",
];

const skillsDescriptions = [
  "typeScript is freaking awesome",
  "react is the best",
  "javaScript is cool",
  "framerMotion",
  "nodeJs",
  "nextJs ",
  "html5 ",
  "tailwind ",
  "css deniecenjicewwniv njiverwvnjiv nijcewd",
];

const skills2 = [
  "python",
  "github",
  "expressJs",
  "sqlite",
  "nginx",
  "sql",
  "docker",
  "linux",
  "git",
];

const skillsDescriptions2 = [
  "python",
  "github",
  "expressJs",
  "sqlite",
  "nginx",
  "sql",
  "docker",
  "linux",
  "git",
];
