import { PhoneIcon } from "@heroicons/react/24/outline";
import React from "react";
import MailIcon from "../assets/icons/mail";
import InstagramIcon from "../assets/icons/instagram";
import TwitterIcon from "../assets/icons/twitter";
import FacebookIcon from "../assets/icons/facebook";
import YoutubeIcon from "../assets/icons/youtube";
import { Link } from "gatsby";
import useHeaderData from "../hooks/useHeaderData";

export default function Header(props) {
  const _data = useHeaderData();

  return (
    <div className="bg-[#252B42] hidden md:block">
      <div
        className="h-[58px] mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
        style={{
          padding: "9px 0px 3px 0px",
        }}
      >
        <div className="flex items-center space-x-[10px]">
          {/* Phone */}
          <a href={`tel:${_data.phone}`}>
            <div className="p-[10px] flex items-center gap-[5px]">
              <PhoneIcon className="h-[20px] w-[20px] text-white" />
              <p className="text-white text-[14px]">{_data.phone}</p>
            </div>
          </a>
          {/* E Posta */}
          <a href={`mailto:${_data.mail}`}>
            <div className="p-[10px] flex items-center gap-[5px]">
              <MailIcon className="h-[20px] w-[20px] text-white" />
              <p className="text-white text-[14px]">{_data.mail}</p>
            </div>
          </a>
        </div>
        {/* Fırsat Mesajı */}
        <div className="p-[10px] flex items-center gap-[5px]">
          <p className="text-white text-[14px]">{_data.discount_text}</p>
        </div>
        {/* Social Medya  */}
        <div className="p-[10px] flex items-center gap-[5px]">
          <span className="text-white text-[14px]">Bizi Takip Edin : </span>
          <div className="flex items-center gap-[5px]  ">
            <Link to={_data.youtube}>
              <InstagramIcon className="h-[20px] w-[20px] text-white" />
            </Link>
            <Link to={_data.youtube}>
              <YoutubeIcon className="h-[20px] w-[20px] text-white" />
            </Link>
            <Link to={_data.youtube}>
              <FacebookIcon className="h-[20px] w-[20px] text-white" />
            </Link>
            <TwitterIcon className="h-[20px] w-[20px] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

// graphql query
