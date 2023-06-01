"use client";

import SocialBtn from "./SocialBtn";
import { RiKakaoTalkFill, RiInstagramFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import FooterInfo from "./FooterInfo";

export default function Footer() {
  return (
    <footer className="w-full bg-teal-700 flex flex-row justify-between p-10">
      <div>
        <h2 className="text-white text-3xl">JANGMIDANG</h2>
        <FooterInfo />
      </div>
      <div className="flex justify-center items-center">
        <SocialBtn src="" icon={<RiKakaoTalkFill size="40" color="#FEE500" />} />
        <SocialBtn src="" icon="/instaIcon.svg" />
        <SocialBtn src="" icon={<SiNaver size="20" color="#2DB400" />} />
      </div>
    </footer>
  );
}
