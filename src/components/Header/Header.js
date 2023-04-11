import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo-dynamox.png";
import HeaderMobile from "./HeaderMobile";

export default function HeaderDesktop() {
  return (
    <header className="w-full max-h-32 bg-DarkBlue top-0 z-[99]">
      <div className="flex items-center justify-between py-7">
        {/* logo */}
        <div className="pl-6 md:pl-20">
          <Link href="https://dynamox.net/">
            <Image src={logo} alt="Logo da Dynamox" width={173} height={65} />
          </Link>
        </div>
        {/* menu */}
        <div className="hidden md:flex text-white space-x-6 text-xl font-dyna font-medium leading-9 pr-12 pt-7">
          <Link href="https://dynamox.net/dynapredict">DynaPredict</Link>
          <Link href="#sensors">Sensores</Link>
          <Link href="#contact">Contato</Link>
        </div>

        <HeaderMobile />
      </div>
    </header>
  );
}
