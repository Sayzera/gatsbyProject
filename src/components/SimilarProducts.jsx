import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Link } from "gatsby";
import useGetAllProducts from "../hooks/useGetAllProducts";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import wpImageIcon from "../assets/images/icons8-whatsapp-40.png";
import telIcon from "../assets/images/icons8-phone-48.png";
import cargoImage from "../assets/images/icons8-cargo-48.png";

function WithStyles({ image, title }) {
  return (
    <div className="widget-cart-similar">
      <div>
        <div className="bg-[#3ec461] widget-cart-logo">
          <img src={cargoImage} width={20} className="mr-1" />
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
            className="h-[150px] "
          />
        </div>

        <div className="p-2">
          <p className="text-xs font-semibold">{title.substring(0, 80)}</p>
        </div>
        <div className="mt-8">
          <div className="p-2 flex space-x-2 items-center">
            <div>
              <img src={telIcon} width={40} />
            </div>
            <span className="text-xs font-semibold">
              Hemen Sipariş Vermek İçin Tıklayın
            </span>
          </div>

          <div className="p-2 flex items-center space-x-2">
            <div>
              <img src={wpImageIcon} width={30} />
            </div>
            <span className="text-xs font-semibold">
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

  let _rand =
    _data?.edges.length > Math.floor(Math.random() * _data?.edges.length - 20)
      ? Math.floor(Math.random() * _data?.edges.length - 20)
      : 0;

  return (
    <div
      className="
      flex
      overflow-x-auto	 
      "
    >
      {_data?.edges
        .slice(
          Math.abs(_rand),
          Math.abs(_rand) + 20 > _data?.edges.length
            ? _data?.edges.length
            : Math.abs(_rand) + 20
        )
        .map((item) => (
          <Link
            key={item.node._id + Math.random()}
            to={`/urunler/${item.node.category?.slug.current}/${item.node.slug.current}/${item.node._id}`}
          >
            <WithStyles
              image={
                item?.node.images?.length > 0
                  ? item?.node.images[0].asset
                  : null
              }
              title={item.node.title}
            />
          </Link>
        ))}
    </div>
  );
}
