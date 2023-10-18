import React from "react";
import useHeaderData from "../hooks/useHeaderData";
import { Link } from "gatsby";
import getCategories from "../api/getCategories";

export default function Footer() {
  const _data = useHeaderData();
  const [categories, setCategories] = React.useState([]);
  const kategorileriGetir = async () => {
    let data = await getCategories();
    setCategories(data);
  };
  React.useEffect(() => {
    kategorileriGetir();
  }, []);

  return (
    <footer className="bg-[#262A42] text-center text-white dark:bg-[#262A42] dark:text-neutral-200 lg:text-left mt-5">
      {/* Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins.*/}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Tailwind Elements section*/}
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold  md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-4 w-4"
              >
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              Kılıçlar Hırdavat
            </h6>
            <p>{_data.short_description}</p>
          </div>
          {/* Products section*/}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold  md:justify-start">
              Kategoriler
            </h6>

            {categories?.map((item, index) => {
              if (index <= 5) {
                return (
                  <p className="mb-4" key={item.slug.current}>
                    <Link
                      to={`/urunler?categories=${item.slug.current}`}
                      className="text-white dark:text-neutral-200"
                    >
                      {item.category_name}
                    </Link>
                  </p>
                );
              } else {
                return null;
              }
            })}
          </div>
          {/* Useful links section*/}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold  md:justify-start">
              Yardımcı Linkler
            </h6>
            <p className="mb-4">
              <Link
                className="text-white dark:text-neutral-200"
                to="/urunler/?tur=en-cok-satanlar"
              >
                En Çok Satanlar
              </Link>
            </p>
            <p className="mb-4">
              <Link
                className="text-white dark:text-neutral-200"
                to="/urunler/?tur=firsat-urunleri"
              >
                Fırsat Ürünleri
              </Link>
            </p>
            <p className="mb-4">
              <Link className="text-white dark:text-neutral-200" to="/">
                İletişim
              </Link>
            </p>
          </div>
          {/* Contact section*/}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold  md:justify-start">
              İletişim
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              {_data.address}
            </p>
            <a href={`mailto:${_data.mail}`}>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                {_data.mail}
              </p>
            </a>
            <a href={` tel:${_data.phone}`}>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                {_data.phone}
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#1E2139] p-6  text-center dark:bg-neutral-700">
        <span>© 2023 Tüm Hakları Sakldır. </span>
        <a
          className="font-semibold text-white dark:text-neutral-400"
          href="https://www.linkedin.com/in/sezer-b%C3%B6l%C3%BCk-927307155"
        >
          Powered by Sezer Bölük
        </a>
      </div>
    </footer>
  );
}
