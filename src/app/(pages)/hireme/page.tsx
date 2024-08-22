"use client";
import Footer from "../../components/Footer";
import useSmoothScroll from "@/app/lib/useSmoothScroll";
import Link from "next/link";
import { useFont } from "@/app/components/FontLoader";
import { useState } from "react";

const HireMe = () => {
  useSmoothScroll();
  const font = useFont("MontrealMedium");
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = () => {
    const textToCopy = "+48 530 833 888";
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setCopySuccess("Phone number copied!");
        setTimeout(() => setCopySuccess(""), 3500);
      },
      (err) => {
        setCopySuccess("");
      }
    );
  };

  return (
    <div className="text-textWhite">
      <div
        className={`absolute top-10 left-10 border p-3 rounded-lg transition duration-150 ${
          copySuccess ? "" : "hidden"
        } `}
      >
        {copySuccess}
      </div>
      <main className="min-h-screen flex flex-col justify-center items-center gap-8 text-xl sm:text-2xl max-w-[600px] mx-auto p-8">
        <h1 className="text-3xl sm:text-4xl">Hire me</h1>
        <p>
          I am currently open for work, so If you are searching for skilled
          creative developer, here I come.{" "}
        </p>
        <p>
          Write me an{" "}
          <a href="mailto:jbmk01@gmail.com">
            <span className="text-textRed cursor-pointer">email</span>
          </a>{" "}
          or just{" "}
          <span
            className="text-textRed cursor-pointer"
            onClick={() => copyToClipboard()}
          >
            call{" "}
          </span>
          me. I&apos;ll be delighted to talk to you and send you a copy of my
          resume.
        </p>
        <p>I am based in Poznan, Poland, but also willing to work remotely.</p>
      </main>
      <Footer />
    </div>
  );
};
export default HireMe;
