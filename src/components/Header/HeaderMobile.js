import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import logo from "../../../public/logo-dynamox.png";

export default function HeaderMobile() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="md:hidden">
      {/* mobile menu */}
      <div
        onClick={handleNav}
        className="flex items-end justify-end px-4 md:hidden"
      >
        <MdOutlineMenu size={35} className="cursor-pointer text-white" />
        <div
          className={
            nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""
          }
        >
          <div
            className={
              nav
                ? "fixed right-0 top-0 w-[80%] h-screen bg-gray-50 ease-in-out duration-700"
                : "fixed left-[-100%]"
            }
          >
            <div className="flex items-center justify-center bg-DarkBlue h-48">
              <Image src={logo} alt="Logo da Dynamox" className="w-40 h-16 " />
            </div>
            {/* menu */}
            <div className="mt-16">
              <ul className="flex flex-col items-center justify-between space-y-8 font-dyna font-medium text-gray-700">
                <Link href="https://dynamox.net/dynapredict" target="_blank">
                  <li onClick={() => setNav(false)}>DynaPredict</li>
                </Link>
                <Link href="#sensors">
                  <li onClick={() => setNav(false)}>Sensores</li>
                </Link>
                <Link href="#contact">
                  <li onClick={() => setNav(false)}>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
