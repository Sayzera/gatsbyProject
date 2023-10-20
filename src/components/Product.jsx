import React from "react";

import { FaTruckFast } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { Link } from "gatsby";
import { sanityImageBuilder } from "../lib/sanityImageBuilder";
export default function Product({ product }) {
  const { title } = product;

  return (
    <div className=" flex flex-col items-center">
      <div className="widget-cart   ">
        <div>
          <Link
            to={`/urunler/${product.category.slug.current}/${product.slug.current}/${product._id}`}
          >
            <div className="bg-[#3ec461] widget-cart-logo">
              <FaTruckFast className="text-xl text-white" />
              <span className="widget-cart-logo-text text-white">
                Hızlı Teslimat
              </span>
            </div>

            <div className="p-2  md:!m-w-[224px]">
              <img
                src={sanityImageBuilder(product?.images[0]).width(224).url()}
                alt="Kılıçlar Hırdavat Slider"
                className="h-[150px] !w-[224px]"
              />
            </div>

            <div className="p-2 ">
              <p className="text-sm font-semibold h-[100px]">{title}</p>
            </div>
          </Link>

          <div className="p-2 flex items-center space-x-2">
            <ImWhatsapp className="text-xl text-green-500" />
            <span className="text-sm font-semibold">
              Detaylı bilgi için tıklayınız
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
