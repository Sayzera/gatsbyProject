import { Link } from "gatsby";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

export default function BreadCrumb() {
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-500">
      <span className="text-black hover:underline">
        <Link to="/">Anasayfa</Link>
      </span>
      <span>
        <AiOutlineRight color="orange" className="font-bold" />
      </span>
      <span className="text-black hover:underline">Ürünler</span>
      <span>
        <AiOutlineRight color="orange" className="font-bold" />
      </span>
      <span className="text-black hover:underline">Askılık Gurubu</span>
      <span>
        <AiOutlineRight color="orange" className="font-bold" />
      </span>
      <span className="text-black font-bold">Askılık</span>
    </div>
  );
}
