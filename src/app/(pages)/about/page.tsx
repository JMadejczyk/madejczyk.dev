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
          As a <span className="text-red-500">Full-Stack Developer</span> and{" "}
          <span className="text-red-500">Artificial Intelligence </span>student{" "}
          at Poznań University of Technology, I’m expanding my expertise from
          modern web technologies like{" "}
          <span className="text-red-500">React</span> and{" "}
          <span className="text-red-500">Next.js</span> into the world of{" "}
          <span className="text-red-500">machine learning</span> and{" "}
          <span className="text-red-500">AI</span>. Driven by curiosity and a
          passion for solving real-world problems, I’m exploring how data and
          intelligent systems can enhance applications and user experiences.
          Let’s connect and grow together in shaping the future of{" "}
          <span className="text-red-500">AI</span>.
        </p>
        <div className="h-20 md:hidden" />
      </main>
      <Footer />
    </div>
  );
};
export default About;
