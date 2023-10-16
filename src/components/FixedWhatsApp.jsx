import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import useHeaderData from "../hooks/useHeaderData";
import { Link } from "gatsby";

export default function FixedWhatsApp() {
  const _data = useHeaderData();

  return (
    <div className="h-12 bg-[#4B4B4B] flex flex-col justify-center items-center opacity-[0.9]">
      <div className="flex space-x-4">
        <a
          href={`https://api.whatsapp.com/send?phone=${_data.phone}&text=Merhaba;%20Daha%20Fazla%20Bilgi%20Alabilir%20miyim?`}
          target="_blank"
        >
          <div className="flex items-center space-x-2 cursor-pointer">
            <span className="text-white font-bold">Hemen Bilgi Al</span>
            <BsWhatsapp size="2.5rem" color="#25D366" />
          </div>
        </a>

        <a href={`tel:${_data.phone}`}>
          <div className="flex items-center space-x-2 cursor-pointer">
            <span className="text-white font-bold">Hemen Ara</span>
            <AiOutlinePhone color="#FEED00" size="3rem" />
          </div>
        </a>
      </div>
    </div>
  );
}
