import Contact from "@/components/Contact/Contact";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Sensors from "@/components/Sensors/Sensors";
import Head from "next/head";

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Dynamox</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Sensors />
      <Contact />
    </div>
  );
}
