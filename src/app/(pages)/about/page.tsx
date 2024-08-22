"use client";
import Footer from "../../components/Footer";
import useSmoothScroll from "@/app/lib/useSmoothScroll";
import Image from "next/image";
import self_portrait from "../../../../public/images/self_portrait.jpg";
import { useFont } from "@/app/components/FontLoader";

const About = () => {
  useSmoothScroll();
  const font = useFont("MontrealMedium");

  return (
    <div>
      <main className="min-h-screen flex flex-col gap-8 m-8 md:my-0 justify-center md:flex-row md:items-center">
        <div className="md:w-[300px]">
          <Image
            src={self_portrait}
            alt="self portrait"
            height={300}
            className="rounded-3xl border border-textWhite m-auto"
            priority={true}
            quality={100}
          />
        </div>
        <p
          className={`text-textWhite ${font.className} max-w-[460px] mx-auto md:mx-0 md:text-lg`}
        >
          As an{" "}
          <span className="text-textRed text-nowrap">
            Artificial Intelligence
          </span>{" "}
          student at Poznan University of Technology and a freelance{" "}
          <span className="text-textRed text-nowrap">Web Developer</span>, I
          specialize in crafting modern web applications using{" "}
          <span className="text-textRed text-nowrap">React, Next.js</span>, and
          other cutting-edge technologies. Passionate about the intersection of{" "}
          <span className="text-textRed text-nowrap">AI</span> and real-world
          applications and dedicated to exploring innovative ways to harness the
          power of data. Let&apos;s collaborate to unlock the potential of AI
          together.
          <span className="text-textRed text-nowrap"></span>
        </p>
        <div className="h-20 md:hidden" />
      </main>
      <Footer />
    </div>
  );
};
export default About;
