import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { BsArrowDownUp } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setOrderBy } from "../redux/queryParamsSlice";

export default function DateOrder() {
  const dispatch = useDispatch();
  const orderFilter = function (order) {
    let isQuestionMark = false;
    // url içinde soru işareti var mı
    if (window.location.pathname.includes("?")) {
      isQuestionMark = true;
    }

    // url sonuna ekle
    const _params = new URLSearchParams(window.location.search);

    if (_params.has("order")) {
      _params.set("order", order);
    } else {
      _params.append("order", order);
    }
    dispatch(setOrderBy(order));
    // url sonuna ekle
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}${
        isQuestionMark == true ? "&" : "?"
      }${_params.toString()}`
    );
  };
  return (
    <div className="pl-2 w-1/2 md:w-[244px] md:mr-2">
      <Menu
        as="div"
        className="relative text-lef md:w-[244px] border border-[#CACDD8] rounded-md   flex justify-center "
      >
        <Menu.Button>
          <div className="h-[50px] flex-shrink-0 flex items-center justify-center w-100  ">
            <div className="flex items-center space-x-2 w-100 justify-center ">
              <span className="text-[#6B7280] font-bold text-sm cursor-pointer w-100 ">
                Önerilen Sıralama
              </span>

              <span>
                <BsArrowDownUp />
              </span>
            </div>
          </div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute -right-[62px] top-[46px] md:right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => {
                      orderFilter("desc");
                    }}
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    En Yeniler
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => {
                      orderFilter("asc");
                    }}
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Önerilen Sıralama
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
