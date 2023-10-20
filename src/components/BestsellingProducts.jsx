import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Link } from "gatsby";
import { FaTruckFast } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import getProducts from "../api/getProducts";
import { sanityImageBuilder } from "../lib/sanityImageBuilder";
import { HiOutlinePhoneIncoming } from "react-icons/hi";

function WithStyles({ image, title }) {
  return (
    <div className="widget-cart !w-[250px] md:w-100">
      <div>
        <div className="bg-[#3ec461] widget-cart-logo">
          <FaTruckFast className="text-xl text-white" />
          <span className="widget-cart-logo-text text-white">
            Hızlı Teslimat
          </span>
        </div>

        <div className="p-2  md:!w-[224px]">
          <img
            src={sanityImageBuilder(image).url()}
            alt="Kılıçlar Hırdavat Slider"
            className="min-h-[150px] w-100 md:!w-[224px]"
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
export default function BestsellingProducts({ type }) {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    cokSatanUrunler();
  }, []);

  async function cokSatanUrunler() {
    let data = await getProducts([], "desc", type);
    setProducts(data);
  }

  return (
    <div
      className="
      flex
      overflow-x-auto	 
      "
    >
      {products.map((item) => (
        <Link
          key={item._id}
          to={`/urunler/${item.category.slug.current}/${item.slug.current}/${item._id}`}
        >
          <WithStyles image={item.images[0].asset} title={item.title} />
        </Link>
      ))}
    </div>
  );
}
