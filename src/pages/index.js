import * as React from "react";
import Slider from "../components/Slider";
import image1 from "../assets/images/kiliclar-hirdavat-slider.webp";
import image2 from "../assets/images/kiliclar-hirdavat-2.webp";

import { Link, graphql } from "gatsby";
import { useDispatch } from "react-redux";
import { setProductType } from "../redux/queryParamsSlice";
import GetSomeCategories from "../components/GetSomeCategories";
import { SEO } from "../components/seo";
import SearchProductFilter from "../components/SearchProductInput";
import SimilarProducts from "../components/SimilarProducts";

const IndexPage = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="mx-auto  max-w-7xl items-center justify-between px-6 lg:px-8 select-none">
      <SearchProductFilter />
      <Slider />

      {/* Orta kısım */}
      <div className="flex flex-col md:flex-row md:justify-between md:space-x-2 text-center mt-4">
        <Link
          onClick={() => dispatch(setProductType("en-cok-satanlar"))}
          to="/urunler?tur=en-cok-satanlar"
          className="rounded-md p-4
          
          
         w-100 md:w-1/3
         bg-[#EFFBF5] text-[#47996D] font-bold"
        >
          <div>En Çok Satanlar</div>
        </Link>

        <Link
          onClick={() => dispatch(setProductType("en-cok-one-cikanlar"))}
          to="/urunler?tur=en-cok-one-cikanlar"
          className=" rounded-md p-4
         bg-[#FEF4EC] w-100 md:w-1/3 my-2 md:my-0 text-[#BA7549] font-bold"
        >
          En Çok Öne Çıkanlar
        </Link>

        <Link
          onClick={() => dispatch(setProductType("firsat-urunleri"))}
          to="/urunler?tur=firsat-urunleri"
          className=" rounded-md p-4
          w-100 md:w-1/3 
            text-[#D12E61] font-bold
            bg-[#FEF0F2]
         "
        >
          Fırsat Ürünleri
        </Link>
      </div>

      {/* Kategorilerden bazıları */}
      <div className="w-100 mt-[50px]">
        <div className="grid md:grid-cols-2 items-start gap-2">
          <Link to="/urunler">
            <div className="relative min-h-[250px]">
              <div className="flex h-full">
                <div className="w-2/3 min-h-[250px] ">
                  <img
                    src={image1}
                    alt="tablali_teker"
                    className="min-h-[250px] object-cover"
                  />
                </div>

                <div className="w-1/3 bg-[#4B4B4B] flex items-center justify-center">
                  <span className="text-white font-bold text-2xl cursor-pointer">
                    Ürünlerimiz
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 bg-black w-[100%] text-white cart-text-container">
                <div className="flex  justify-between w-[100%] group">
                  <div>Kılıçlar Hırdavat</div>
                  <div className="hidden  group-hover:block group-hover:text-white cursor-pointer">
                    İncelemek için tıklayınız
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/urunler/?tur=en-cok-satanlar">
            <div className="relative min-h-[250px]">
              <div className="flex h-full">
                <div className="w-2/3 min-h-[250px] ">
                  <img
                    src={image2}
                    alt="tablali_teker"
                    className="h-[250px] object-cover"
                    style={{
                      width: "100%",
                    }}
                  />
                </div>

                <div className="w-1/3 bg-[#4B4B4B] flex items-center justify-center">
                  <span className="text-white font-bold text-2xl cursor-pointer">
                    Çok Satanlar
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 bg-black w-[100%] text-white cart-text-container">
                <div className="flex  justify-between w-[100%] group">
                  <div>Kılıçlar Hırdavat </div>
                  <div className="hidden  group-hover:block group-hover:text-white cursor-pointer">
                    İncelemek için tıklayınız
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Çok Satanlar */}
      <div className="mt-[25px] cart-container">
        <span className="title">Çok Satan Ürünler</span>
        <div>
          <SimilarProducts type="en-cok-satanlar" />
        </div>
      </div>

      {/* Kategorilerden bazıları */}
      <GetSomeCategories />

      {/* Çok Satanlar */}
      <div className="mt-[25px] cart-container">
        <span className="title">Öne Çıkan Ürünler</span>
        <div>
          <SimilarProducts type="en-cok-one-cikanlar" />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => {
  return <SEO />;
};

// graphql query

export const query = graphql`
  query Ayarlar {
    sanitySettings {
      id
      phone
      address
      discount_text
      facebook
      fax
      google_maps
      instagram
      short_description
      twitter
      youtube
      mail
      logo {
        asset {
          url
        }
      }
    }
  }
`;
