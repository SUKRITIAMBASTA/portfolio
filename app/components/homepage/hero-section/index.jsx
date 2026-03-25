// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-6 lg:py-12">
      
      {/* Background Image */}
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10 opacity-80"
      />

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-start justify-center p-2 lg:pt-10">

          <h1 className="text-3xl md:text-4xl font-bold leading-snug text-white lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is{" "}
            <span className="text-pink-500">{personalData.name}</span>
            {`, I'm a `}
            <span className="text-[#16f2b3]">
              {personalData.designation}
            </span>.
          </h1>

          {/* SOCIAL ICONS */}
          <div className="my-10 flex items-center gap-8">

            <Link href={personalData.github} target="_blank">
              <div className="p-3 rounded-lg bg-[#10172d] border border-[#353a52] text-pink-500 hover:bg-[#16f2b3] hover:text-black transition duration-300 hover:scale-110 hover:shadow-[0_0_12px_#16f2b3]">
                <BsGithub size={22} />
              </div>
            </Link>

            <Link href={personalData.linkedIn} target="_blank">
              <div className="p-3 rounded-lg bg-[#10172d] border border-[#353a52] text-pink-500 hover:bg-[#16f2b3] hover:text-black transition duration-300 hover:scale-110 hover:shadow-[0_0_12px_#16f2b3]">
                <BsLinkedin size={22} />
              </div>
            </Link>

            {personalData.leetcode && (
              <Link href={personalData.leetcode} target="_blank">
                <div className="p-3 rounded-lg bg-[#10172d] border border-[#353a52] text-pink-500 hover:bg-[#16f2b3] hover:text-black transition duration-300 hover:scale-110 hover:shadow-[0_0_12px_#16f2b3]">
                  <SiLeetcode size={22} />
                </div>
              </Link>
            )}

          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-4 mt-2">

            <Link
              href="#contact"
              className="bg-gradient-to-r from-violet-600 to-pink-500 p-[1px] rounded-full hover:from-pink-500 hover:to-violet-600 transition"
            >
              <button className="px-4 md:px-8 py-3 bg-[#0d1224] rounded-full text-white text-xs md:text-sm font-medium uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                Contact Me
                <RiContactsFill size={18} />
              </button>
            </Link>

            {personalData.resume && (
              <Link
                href={personalData.resume}
                target="_blank"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-4 md:px-8 py-3 text-white text-xs md:text-sm font-medium uppercase tracking-wider hover:gap-3 transition-all"
              >
                Get Resume
                <MdDownload size={18} />
              </Link>
            )}

          </div>
        </div>

        {/* RIGHT SIDE (CODE BOX) */}
        <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">

          {/* TOP LINE */}
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>

          {/* DOTS */}
          <div className="px-4 lg:px-8 py-4">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>

          {/* CODE CONTENT */}
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-6">
            <code className="font-mono text-xs md:text-sm lg:text-base text-white">

              <div>
                <span className="text-pink-500">const</span>{" "}
                coder = {"{"}
              </div>

              <div className="ml-4">
                name: "<span className="text-amber-300">Sukriti Ambasta</span>",
              </div>

              <div className="ml-4">
                skills: ["Next.js", "React", "Java", "MongoDB", "ML"],
              </div>

              <div className="ml-4">
                problemSolver: true,
              </div>

              <div className="ml-4">
                quickLearner: true,
              </div>

              <div className="ml-4">
                hireable: function() {"{"}
              </div>

              <div className="ml-8">
                return this.problemSolver && this.skills.length &gt;= 5;
              </div>

              <div className="ml-4">{"}"}</div>
              <div>{"}"}</div>

            </code>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;