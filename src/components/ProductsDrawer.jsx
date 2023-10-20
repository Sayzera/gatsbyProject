import React, { memo } from "react";
import Drawer from "react-modern-drawer";
//import styles 👇
import "react-modern-drawer/dist/index.css";
import { gql, useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { setCategorParams } from "../redux/queryParamsSlice";

function ProductsDrawer({ isOpen, setIsOpen }) {
  const dispatch = useDispatch();

  const ALL_CATEGORIES_QUERY = gql`
    query {
      allCategories {
        _id
        category_name
        slug {
          current
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(ALL_CATEGORIES_QUERY);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [categories, setCategories] = React.useState([]);

  // filitreleri uygulaya basınca url paremetre olarak ekle array şeklinde
  // https://www.abc.com/?categories=deneme,deneme2,deneme3
  const categoriesFilter = function () {
    let params = "";

    if (categories.length > 0) {
      params = `categories=${categories.join(",")}`;
    }

    let isQuestionMark = false;
    // url içinde soru işareti var mı
    if (window.location.pathname.includes("?")) {
      isQuestionMark = true;
    }

    // url sonuna ekle
    const _params = new URLSearchParams(window.location.search);

    // eğer categories varsa sil

    if (_params.has("categories")) {
      _params.set("categories", categories.join(","));
    } else {
      _params.append("categories", categories.join(","));
    }

    // url sonuna ekle
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}${
        isQuestionMark == true ? "&" : "?"
      }${_params.toString()}`
    );

    dispatch(setCategorParams(categories));
  };

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
        style={{
          width: "280px",
          display: "flex",
          flexDirection: "column",
          flexShrink: "0",
          padding: "10px",
        }}
      >
        <div>
          {loading && (
            <div className="flex justify-center items-center">
              <div className="loader">Loading...</div>
            </div>
          )}
          <div className="filitreText">Arama Seçenekleri</div>

          <div
            className="py-2 flex justify-center"
            onClick={() => {
              dispatch(setCategorParams([]));
              setCategories([]);
            }}
          >
            <button className="clearButton">
              Temizle {categories?.length > 0 && "(" + categories?.length + ")"}
            </button>
          </div>

          <div className="mt-[17px]">
            <span className="filitreText">Kategoriler</span>

            <div className="mt-3">
              {data?.allCategories.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="flex items-center justify-between mt-2"
                  >
                    <label htmlFor={item.slug.current}>
                      {item.category_name}
                    </label>
                    <input
                      id={item.slug.current}
                      value={item.slug.current}
                      checked={categories.includes(item.slug.current)}
                      type="checkbox"
                      onChange={(e) => {
                        setCategories((prev) => {
                          if (e.target.checked) {
                            return [...prev, e.target.value];
                          } else {
                            return prev.filter(
                              (item) => item !== e.target.value
                            );
                          }
                        });
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-[25px] flex justify-center">
            <button
              className="clearButton bg-[#0156FF] text-white"
              onClick={() => {
                categoriesFilter();
              }}
            >
              Filitreleri Uygula
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default memo(ProductsDrawer);
