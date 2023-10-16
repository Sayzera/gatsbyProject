import { Link } from "gatsby";
import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import ProductImagesSwiper from "../../components/ProductImagesSwiper";
import BestsellingProducts from "../../components/BestsellingProducts";

export default function UrunDetay() {
  return (
    <div className="mx-auto  max-w-7xl items-center justify-between px-6 lg:px-8">
      {/* 
      breadcrumb */}
      <BreadCrumb />

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:space-x-8">
        <div className="max-h-[450px]">
          <ProductImagesSwiper />
        </div>

        <div>
          <h1 className="h1-title">
            <Link to="#">
              <span>U Saclı Tablalı 20 x 50 Teker</span>
            </Link>
          </h1>

          <div>
            <h2 className="h2-title border-b border-gray-300 mb-2 pb-2">
              Teknik Açıklamalar
            </h2>

            <div>
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Markası
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Adı
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Özellikleri
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td class="px-6 py-4">Silver</td>
                      <td class="px-6 py-4">Laptop</td>
                    </tr>
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
                  <span className="font-bold"> U Saclı Tablalı 20 x 50 </span>
                  Teker, montaj sırasında, tablanın üzerinde yer alan U
                  tablanın, mobilyaya direk geçirilmesiyle yapılır. Pratik ve
                  sağlam oluşuyla ön plana çıkan bu ürünlerde yer alan oynak
                  maşa sayesinde 360 derece dönme özelliğine sahiptir. İnsanlık
                  tarihinin önemli keşiflerin başında gelen tekerler, geçmişten
                  bugüne şekil değiştirerek gelmiştir. Zengin kullanım
                  alanlarına sahip olan u tablalı tekerlek, ağır yüklerin,
                  hafifletilerek taşınmasında etkili olmaktadır. Zengin ürün
                  çeşitliliği olan tekerler kullanım alanlarına göre farklı
                  detaylara sahiptir. Temizlik ekipmanları, medikal ekipmanlar,
                  mağaza ekipmanları ve çeşitli mobilyalar için tercih edilen u
                  saclı tablalı tekerlek, geniş tasarımlıdır. Oynak fren
                  sistemi, u tabanlı tekerlek ve polipropilen tekerlek
                  özelliklerine sahip olan bu ürünler, dayanıklı materyalleri
                  sayesinde uzun süre kullanılmaya uygundur.
                </span>
              </li>
            </ul>

            <h2 className="h2-title border-b border-gray-300  mb-2 pb-2">
              ÜRÜN SEVKİYATI – NAKLİYESİ
            </h2>

            <ul className="detail-attr-container">
              <li className="detail-attr-item">
                <span>
                  U Saclı 20 x50 Tablalı Teker kargo ile Türkiye’nin her
                  bölgesine gönderebilmekteyiz. Ayrıca Ankara ve merkez ilçelere
                  nalbur, hırdavat ve yapı malzeme firmalarına belli
                  periyotlarda araç sevkiyatımız vardır. Ayrıntılı bilgi almak
                  için iletişim kanallarımızdan bizlere ulaşabilirsiniz
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
