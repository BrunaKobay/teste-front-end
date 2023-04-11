import Image from "next/image";
import sensorAf from "../../../public/sensor-af.png";
import sensorHf from "../../../public/sensor-hf.png";
import sensorTca from "../../../public/sensor-tca.png";

export default function Sensors() {
  return (
    <section
      id="sensors"
      className="flex flex-col items-center bg-[#F4F7FC] font-dyna pt-24 "
    >
      <div className="text-center">
        <h1 className="font-bold text-[#37383D] text-2xl lg:text-4xl">
          Sensores para Manutenção Preditiva
        </h1>
        <p className="font-normal text-[#454545] text-lg pt-4 px-4 lg:text-2xl lg:px-96">
          Opções de sensores sem fio, ou DynaLoggers com sensores de vibração
          triaxial e temperatura embarcados, que comunicam por Bluetooth com o
          App mobile ou Gateway, registrando os dados monitorados em sua memória
          interna. Por conexão internet esses dados são centralizados na
          Plataforma DynaPredict Web para análise, prognóstico e tomada de
          decisão.
        </p>
      </div>

      <div className="py-7"></div>
      <button className="bg-DarkBlue text-white font-bold text-xl py-2 px-12 rounded-md uppercase hover:bg-LightBlue ">
        <a href="https://dynamox.net/dynapredict/" target="_blank">
          Ver Mais
        </a>
      </button>

      <div className="flex flex-col justify-center items-center space-y-10 py-9 text-center font-bold text-4xl text-[#5D7A8C] md:flex-row md:space-x-28 ">
        <div className="">
          <Image
            src={sensorTca}
            width={276}
            height={297}
            alt="sensor do tipo Tca"
          />
          <h3>TcA+</h3>
        </div>
        <div className="">
          <Image
            src={sensorAf}
            width={276}
            height={297}
            alt="sensor do tipo Af"
          />
          <h3>AS</h3>
        </div>
        <div className="">
          <Image
            src={sensorHf}
            width={276}
            height={297}
            alt="sensor do tipo Hf"
          />
          <h3>HF</h3>
        </div>
      </div>
    </section>
  );
}
