import React from "react";
import useHeaderData from "../hooks/useHeaderData";
import { FaMapLocationDot } from "react-icons/fa6";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { Link } from "gatsby";

export default function Iletisim() {
  const _data = useHeaderData();
  return (
    <div className="mx-auto  max-w-7xl items-center justify-between px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Item 1  */}
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
            İletişim
          </div>
          <div className="p-6">
            <div className="flex space-x-3 items-center">
              <FaMapLocationDot className="text-2xl text-neutral-600 dark:text-neutral-300" />
              <p className="text-base text-neutral-600 dark:text-neutral-200">
                {_data.address}
              </p>
            </div>

            <div className="flex space-x-3 items-center mt-2">
              <AiOutlineMail className="text-2xl text-neutral-600 dark:text-neutral-300" />
              <p className="text-base text-neutral-600 dark:text-neutral-200">
                {_data.mail}
              </p>
            </div>

            <div className="flex space-x-3 items-center mt-2">
              <AiOutlinePhone className="text-2xl text-neutral-600 dark:text-neutral-300" />
              <p className="text-base text-neutral-600 dark:text-neutral-200">
                {_data.phone}
              </p>
            </div>
          </div>
        </div>
        {/* Item 2 */}

        <div className=" rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 flex flex-col justify-center">
          <div className="p-6 flex flex-col">
            <Link
              className="!w-100"
              to={`https://api.whatsapp.com/send?phone=${_data.phone}&text=Merhaba;%20Daha%20Fazla%20Bilgi%20Alabilir%20miyim?`}
            >
              <button
                type="button"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 !w-100"
                style={{
                  width: "100%",
                }}
              >
                Whatsapp üzerinden bizimle iletişime geçin
              </button>
            </Link>
            <Link to={`tel:${_data.phone}`} className="w-100">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-100"
                style={{
                  width: "100%",
                }}
              >
                Hemen arayın
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
