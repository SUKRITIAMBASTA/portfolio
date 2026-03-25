// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-16 relative text-white">

      {/* SIDE LABEL */}
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] text-white rotate-90 px-5 py-2 text-lg rounded-md">
          CONTACT
        </span>
        <span className="h-32 w-[2px] bg-[#1a1443]"></span>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[420px]">

        {/* LEFT: FORM */}
        <div className="h-full flex items-center">
          <ContactForm />
        </div>

        {/* RIGHT: CONTACT INFO */}
        <div className="w-full lg:max-w-md mx-auto lg:mx-0 flex flex-col justify-center">

          {/* INFO CARD */}
          <div className="bg-[#10172d] border border-[#353a52] rounded-xl p-6 flex flex-col gap-5 shadow-md">

            {/* EMAIL */}
            <div className="flex items-center gap-4">
              <MdAlternateEmail className="text-[#16f2b3]" size={28} />
              <span className="text-sm md:text-base break-all">
                {personalData.email}
              </span>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-4">
              <IoMdCall className="text-[#16f2b3]" size={28} />
              <span className="text-sm md:text-base">
                {personalData.phone}
              </span>
            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-4">
              <CiLocationOn className="text-[#16f2b3]" size={28} />
              <span className="text-sm md:text-base">
                {personalData.address}
              </span>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-6 flex items-center gap-4">

            <Link target="_blank" href={personalData.github}>
              <div className="p-3 rounded-lg bg-[#10172d] border border-[#353a52] hover:bg-[#16f2b3] hover:text-black transition duration-300 cursor-pointer hover:scale-110">
                <IoLogoGithub size={24} />
              </div>
            </Link>

            <Link target="_blank" href={personalData.linkedIn}>
              <div className="p-3 rounded-lg bg-[#10172d] border border-[#353a52] hover:bg-[#16f2b3] hover:text-black transition duration-300 cursor-pointer hover:scale-110">
                <BiLogoLinkedin size={24} />
              </div>
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;