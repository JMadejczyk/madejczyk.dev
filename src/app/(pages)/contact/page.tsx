"use client";
import Footer from "../../components/Footer";
import useSmoothScroll from "@/app/lib/useSmoothScroll";
import Link from "next/link";
import { useFont } from "@/app/components/FontLoader";

const Contact = () => {
  useSmoothScroll();
  const font = useFont("MontrealMedium");

  return (
    <div>
      <main className="min-h-screen flex flex-col justify-center items-center gap-5 text-textWhite text-center text-xl sm:text-2xl">
        <h1 className="text-3xl sm:text-4xl">Contact me</h1>
        <div>
          <p className="text-textRed">By mail:</p>
          <p>jbmk01@gmail.com</p>
        </div>
        <div>
          <p className="text-textRed">By phone:</p>
          <p>+48 530 833 888</p>
        </div>
        <div>
          <p className="text-textRed">On LinkedIn:</p>
          <Link
            href="https://www.linkedin.com/in/jakub-madejczyk-1717702a4/"
            target="blank"
          >
            <p>LinkedIn/JakubMadejczyk</p>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Contact;
