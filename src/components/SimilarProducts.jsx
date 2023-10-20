import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Link } from "gatsby";
import { FaTruckFast } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import getProducts from "../api/getProducts";
import { sanityImageBuilder } from "../lib/sanityImageBuilder";
import { HiOutlinePhoneIncoming } from "react-icons/hi";
import useGetAllProducts from "../hooks/useGetAllProducts";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function WithStyles({ image, title }) {
  return (
    <div className="widget-cart-similar">
      <div>
        <div className="bg-[#3ec461] widget-cart-logo">
          <FaTruckFast className="text-xl text-white" />
          <span className="widget-cart-logo-text text-white">
            Hızlı Teslimat
          </span>
        </div>

        <div className="p-2  md:!w-[224px]">
          {/* <img
            src={sanityImageBuilder(image).url()}
            alt="Kılıçlar Hırdavat Slider"
         
          /> */}
          <GatsbyImage
            image={getImage(image)}
            alt="Kılıçlar Hırdavat Slider"
            className="h-[150px] w-100 md:!w-[205px]"
          />
        </div>

        <div className="p-2">
          <p className="text-sm font-semibold">{title}</p>
        </div>
        <div className="mt-8">
          <div className="p-2 flex space-x-2 items-center">
            <div>
              <HiOutlinePhoneIncoming
                className="text-xl text-[#4B4B4B]"
                size={30}
              />
            </div>
            <span className="text-sm font-semibold">
              Hemen Sipariş Vermek İçin Tıklayın
            </span>
          </div>

          <div className="p-2 flex items-center space-x-2">
            <div>
              <ImWhatsapp className="text-xl text-green-500" size={30} />
            </div>
            <span className="text-sm font-semibold">
              Detaylı bilgi için tıklayınız
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function SimilarProducts({ type }) {
  const _data = useGetAllProducts();

  return (
    <div
      className="
      flex
      overflow-x-auto	 
      "
    >
      {_data?.edges.map((item) => (
        <Link
          key={item.node._id}
          to={`/urunler/${item.node.category.slug.current}/${item.node.slug.current}/${item.node._id}`}
        >
          <WithStyles
            image={
              item?.node.images?.length > 0 ? item?.node.images[0].asset : null
            }
            title={item.node.title}
          />
        </Link>
      ))}
    </div>
  );
}
