"use client";

import SocialBtn from "./SocialBtn";
import { RiKakaoTalkFill, RiInstagramFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import FooterInfo from "./FooterInfo";

export default function Footer() {
  return (
    <footer className="w-full bg-teal-700 flex flex-col justify-between p-10 sm:flex-row gap-6">
      <div>
        <h2 className="text-white text-3xl font-bold">JANGMIDANG</h2>
        <FooterInfo />
      </div>
      <div className="flex justify-center items-center gap-3">
        <SocialBtn
          src="https://open.kakao.com/o/sxgpWLAb"
          icon={<RiKakaoTalkFill size="40" color="#FEE500" />}
        />
        <SocialBtn src="https://www.instagram.com/jangmidang/" icon="/instaIcon.svg" />
        <SocialBtn
          src="https://talk.naver.com/ct/wc36yp?frm=psf"
          icon={<SiNaver size="20" color="#2DB400" />}
        />
      </div>
    </footer>
  );
}
