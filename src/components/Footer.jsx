"use client";

import { social } from "@/utils";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-auto flex justify-between items-center sm:px-10 px-5 py-2.5">
      <Link
        href={"#"}
        className="font-secondary underline opacity-75 font-light sm:text-base text-sm"
      >
        Privacy Policy
      </Link>
      <div className="w-fit h-full flex items-center sm:gap-8 gap-4">
        {social.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target="_blank"
            className="flex flex-col gap-2"
          >
            <span className="sm:text-xl text-lg mx-auto">{item.icon}</span>
          </Link>
        ))}
      </div>
      <Link
        href={"#"}
        className="font-secondary underline opacity-75 font-light sm:text-base text-sm"
      >
        Terms of Use
      </Link>
    </footer>
  );
};

export default Footer;
