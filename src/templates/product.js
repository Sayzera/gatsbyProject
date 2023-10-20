import { Link } from "gatsby";
import React from "react";
import ProductImagesSwiper from "../components/ProductImagesSwiper";
import StaticBreadCrumb from "../components/StaticBreadCrumb";
import { SEO } from "../components/seo";
import SimilarProducts from "../components/SimilarProducts";
import BlockContent from "@sanity/block-content-to-react";
import { PortableText } from "@portabletext/react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export default function UrunDetay(props) {
  const {
    pageContext: { data },
    pageContext: { products },
  } = props;

  const _product = products?.filter((item) => item._id == data._id);

  const myPortableTextComponents = {
    types: {
      image: ({ value }) => <img src={value.imageUrl} />,
      callToAction: ({ value, isInline }) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
    },

    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
      number: ({ children }) => <ol className="mt-lg">{children}</ol>,

      // Ex. 2: rendering custom lists
      checkmarks: ({ children }) => (
        <ol className="m-auto text-lg">{children}</ol>
      ),
    },

    listItem: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => <li> ✅ {children}</li>,

      // Ex. 2: rendering custom list items
      checkmarks: ({ children }) => <li>✅ {children}</li>,
    },

    marks: {
      link: ({ children, value }) => {
        const rel = !value?.href?.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        );
      },
    },
  };

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
                          <td
                            class="px-2 py-4 font-medium text-gray-900  dark:text-white"
                            style={{
                              maxWidth: "100px",
                            }}
                          >
                            {item.title}
                          </td>
                          <td class="px-2 py-4">{item.description}</td>
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
                  <PortableText
                    value={_product?.length > 0 ? _product[0]?.overview : []}
                    components={myPortableTextComponents}
                  />
                </span>
              </li>
            </ul>

            <h2 className="h2-title border-b border-gray-300  mb-2 pb-2">
              ÜRÜN SEVKİYATI – NAKLİYESİ
            </h2>

            <ul className="detail-attr-container">
              <li className="detail-attr-item">
                <PortableText
                  value={_product?.length > 0 ? _product[0]?.sevkiyat : []}
                  components={myPortableTextComponents}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-[25px] cart-container">
        <span className="title">Çok Satan Ürünler</span>
        <div>
          <SimilarProducts />
        </div>
      </div>
    </div>
  );
}

export const Head = (props) => {
  let data = props.pageContext.data;
  let settings = useSiteMetadata();

  return (
    <SEO title={"Kılıçlar Hırdavat | " + data.title}>
      <Helmet>
        <script type="application/ld+json">
          {`
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "${data.title}",
            "description": "${data.seo_description}",
            "url": "${settings.siteUrl}/urunler/${data.category.slug}/${data.slug.current}/${data._id}",
            "brand": {
              "@type": "Brand",
              "name": "Kılıçlar Hırdavat"
            },
            "offers": {
              "@type": "Offer",
              "url": "${settings.siteUrl}/urunler/${data.category.slug}/${data.slug.current}/${data._id}",
              "priceCurrency": "TL",
              "availability": "https://schema.org/InStock"
            },
            "category": "${data.category.category_name}",
            "keywords": "${data.seo_keywords}",
            "image":"${data.images[0].asset.gatsbyImageData.images.fallback.src}"
  `}
        </script>
      </Helmet>
    </SEO>
  );
};
