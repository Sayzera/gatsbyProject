import { Link } from "gatsby";
import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import ProductImagesSwiper from "../components/ProductImagesSwiper";
import BestsellingProducts from "../components/BestsellingProducts";
import StaticBreadCrumb from "../components/StaticBreadCrumb";
import { SEO } from "../components/seo";

export default function UrunDetay(props) {
  const {
    pageContext: { data },
  } = props;

  console.log(data);
  return (
    <div className="mx-auto  max-w-7xl items-center justify-between px-6 lg:px-8">
      {/* 
      breadcrumb */}
      <StaticBreadCrumb data={data} />

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:space-x-8">
        <div className="product-images-container-1">
          <ProductImagesSwiper data={data} />
        </div>

        <div>
          <h1 className="h1-title">
            <Link to="#">
              <span>{data.title}</span>
            </Link>
          </h1>

          <div>
            <h2 className="h2-title border-b border-gray-300 mb-2 pb-2">
              Teknik Açıklamalar
            </h2>

            <div>
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <tbody>
                    {data.ozellikler.map((item, index) => {
                      return (
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {item.title}
                          </th>
                          <td class="px-6 py-4">{item.description}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="h2-title border-b border-gray-300  mb-2 pb-2">
              Ürün Açıklaması
            </h2>

            <ul className="detail-attr-container">
              <li className="detail-attr-item">
                <span>
                  {data.overview.map((item, index) => {
                    return <span>{item._rawChildren[0].text}</span>;
                  })}
                </span>
              </li>
            </ul>

            <h2 className="h2-title border-b border-gray-300  mb-2 pb-2">
              ÜRÜN SEVKİYATI – NAKLİYESİ
            </h2>

            <ul className="detail-attr-container">
              <li className="detail-attr-item">
                <span>
                  {data?.sevkiyat?.map((item, index) => {
                    return <span>{item.children[0].text}</span>;
                  })}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-[25px] cart-container">
        <span className="title">Çok Satan Ürünler</span>
        <div>
          <BestsellingProducts />
        </div>
      </div>
    </div>
  );
}

export const Head = (props) => {
  let data = props.pageContext.data;
  return <SEO title={"Kılıçlar Hırdavat | " + data.title}></SEO>;
};
