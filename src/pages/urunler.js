import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import ProductsDrawer from "../components/ProductsDrawer";
import Product from "../components/Product";
import DateOrder from "../components/DateOrder";
import SearchProductFilter from "../components/SearchProductInput";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategoryParams,
  selectOrderBy,
  selectProductType,
  setCategorParams,
  setOrderBy,
  setProductType,
} from "../redux/queryParamsSlice";
import getProducts from "../api/getProducts";
import { navigate } from "gatsby";

export default function Urunler({ params }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  /**
   * Kullanım anında bir değişiklik olursa reduxtan
   */
  let categoryParams = useSelector(selectCategoryParams);
  let orderBy = useSelector(selectOrderBy);
  let productType = useSelector(selectProductType);

  const [_categoryParams, _setCategoryParams] = useState(null);
  const [_orderBy, _setOrderBy] = useState(null);
  const [_productType, _setProductType] = useState(null);

  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    /**
     * Eğer sayfa refresh olursa url den çekilen parametreler ile
     */
    let urlParams = new URLSearchParams(window.location.search);
    let url_categoryParams = urlParams.get("categories");
    let url_orderBy = urlParams.get("order");
    let url_productType = urlParams.get("tur");

    if (categoryParams?.length > 0) {
      _setCategoryParams(categoryParams);
    } else {
      _setCategoryParams(url_categoryParams?.split(","));
    }
    if (orderBy) {
      _setOrderBy(orderBy);
    } else {
      _setOrderBy(url_orderBy);
    }
    if (productType) {
      _setProductType(productType);
    } else {
      _setProductType(url_productType);
    }
  }, [categoryParams, orderBy, productType, params]);

  React.useEffect(() => {
    /**
     * Filitrenin düzgün çalışması için eklenmiştir
     */
    let urlParams = new URLSearchParams(window.location.search);
    let url_categoryParams = urlParams.get("categories");
    let url_orderBy = urlParams.get("order");
    let url_productType = urlParams.get("tur");

    if (
      url_categoryParams == null &&
      url_orderBy == null &&
      url_productType == null
    ) {
      _setCategoryParams([]);
      _setOrderBy(false);
      _setProductType(false);
      dispatch(setCategorParams([]));
      dispatch(setOrderBy(false));
      dispatch(setProductType(false));
    }
  }, []);

  // get params categories

  React.useEffect(() => {
    let timer = setTimeout(() => {
      _getProducts();
    }, 500);

    return () => clearTimeout(timer);
  }, [
    categoryParams,
    orderBy,
    productType,
    _categoryParams,
    _orderBy,
    _productType,
  ]);

  async function _getProducts() {
    setProducts([]);

    let result = await getProducts(_categoryParams, _orderBy, _productType);
    setProducts(result);
  }

  return (
    <div className="mx-auto  max-w-7xl items-center justify-between px-6 lg:px-8">
      <ProductsDrawer isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="mb-4 relative">
        <SearchProductFilter />
      </div>
      {/* Header */}
      <div className="md:flex items-center justify-between">
        <div
          className="md:flex items-center w-[233px] h-[50px] hidden md:block"
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoIosArrowBack />
          <div className="back-title ">Geri</div>
        </div>

        <div className="flex items-center flex-shrink-0 ">
          <DateOrder />

          <div className="pl-2 w-1/2 md:w-[244px]">
            <div className="h-[50px] flex-shrink-0 rounded-md border border-[#CACDD8] flex items-center justify-center">
              <div
                className="flex items-center space-x-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="text-[#6B7280] font-bold text-sm cursor-pointer">
                  Kategoriler
                </span>

                <span>
                  <BiCategoryAlt />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {(_categoryParams?.length > 0 || _orderBy || _productType) && (
        <div className="flex mt-2 px-2">
          <div className="text-sm text-center  text-[#6B7280] font-bold mr-2 border border-[#d5d8dd] rounded-md px-2 py-1 w-[200px] shadow-md">
            Filtreyi temizle
          </div>

          <div
            onClick={() => {
              dispatch(setCategorParams([]));
              _setCategoryParams([]);

              _setOrderBy(false);
              dispatch(setOrderBy(false));
              _setProductType(false);
              dispatch(setProductType(false));
              navigate("/urunler");
            }}
            className="text-sm text-[#6B7280] font-bold mr-2 border border-[#d5d8dd] rounded-md px-2 py-1 shadow-md cursor-pointer"
          >
            Temizle
          </div>
        </div>
      )}
      {products?.length == 0 && (
        <div className="text-center text-[#6B7280] font-bold mt-4">
          Ürün bulunamadı
        </div>
      )}
      <div className=" grid grid-cols-2 md:grid-cols-5 items-center  mt-[25px] gap-2 justify-center ml-4 md:ml-0">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
