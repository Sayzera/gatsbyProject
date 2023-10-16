import { Link } from "gatsby";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { navigate } from "gatsby";

export default function StaticBreadCrumb({ data }) {
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-500 breadCrumb">
      <span className="text-black hover:underline ">
        <Link to="/">Anasayfa</Link>
      </span>
      <span>
        <AiOutlineRight color="orange" className="font-bold" />
      </span>
      <span
        onClick={() => navigate("/urunler")}
        className="text-black hover:underline"
      >
        Ürünler
      </span>
      <span>
        <AiOutlineRight color="orange" className="font-bold" />
      </span>
      <span
        className="text-black hover:underline"
        onClick={() => {
          navigate(`/urunler/?categories=${data.category.slug.current}`);
        }}
      >
        {data.category.category_name}
      </span>
      <span>
        <AiOutlineRight color="orange" className="font-bold" />
      </span>
      <span className="text-black font-bold">{data.title}</span>
    </div>
  );
}
