import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "@/components/ui/MagicButton";
import { HiDownload } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a
          className=" bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/NextjsCv.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
           omarfarukdider@gmail.com
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
           
            
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
                <a href={info.link}>
              <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>

          
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

