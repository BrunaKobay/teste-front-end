import Image from "next/image";
import logo from "../../../public/logo-dynapredict.png";
import deskMob from "../../../public/desktop-and-mobile.png";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center font-dyna bg-DarkBlue lg:bg-[url('../../public/grafismo.png')] bg-cover bg-center bg-no-repeat max-h-screen w-full pb-28">
      <div className="flex flex-col justify-center items-center pt-14 lg:block lg:items-start lg:px-28 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">Solução </h1>
        <h1 className="text-4xl font-bold pb-6"> DynaPredict</h1>
        <Image src={logo} alt="Logo do aplicativo DynaPredict" />
      </div>
      <div>
        <Image
          src={deskMob}
          alt="Imagem com um notebook e um smartphone ilustrando a interface do aplicativo DynaPredict na versão desktop e mobile"
        />
      </div>
    </section>
  );
}
