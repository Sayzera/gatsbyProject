import React from "react";
import { navigate } from "gatsby";
import getCategories from "../api/getCategories";
import { sanityImageBuilder } from "../lib/sanityImageBuilder";
export default function GetSomeCategories() {
  const [categories, setCategories] = React.useState([]);

  async function kategorileriGetir() {
    let data = await getCategories();

    // arrayin içinden rastgele 2 tane seç
    let _categories = [];
    for (let i = 0; i < 2; i++) {
      let random = Math.floor(Math.random() * data.length);
      _categories.push(data[random]);
    }

    setCategories(_categories);
  }

  React.useEffect(() => {
    kategorileriGetir();
  }, []);

  return (
    <div className="w-100 mt-[50px]">
      <div className="grid md:grid-cols-2 items-start gap-2">
        {categories?.map((item) => (
          <div
            key={item.slug.current}
            className="relative h-[250px]"
            onClick={() =>
              navigate(`/urunler/?categories=${item.slug.current}`)
            }
          >
            <div className="flex h-full">
              <div className="w-2/3 h-[250px] flex justify-center">
                <img
                  src={sanityImageBuilder(item.image)
                    .width(300)
                    .height(300)
                    .url()}
                  alt="tablali_teker"
                  className="h-[100%] object-cover"
                />
              </div>

              <div className="w-1/3 bg-[#4B4B4B] flex items-center justify-center">
                <span className="text-white font-bold text-2xl cursor-pointer">
                  {item.category_name}
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
        ))}
      </div>
    </div>
  );
}
