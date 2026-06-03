import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import TheChange from "@/components/sections/TheChange";
import Sectors from "@/components/sections/Sectors";
import Editions from "@/components/sections/Editions";
import Distribution from "@/components/sections/Distribution";
import Advertise from "@/components/sections/Advertise";
import Events from "@/components/sections/Events";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <TheChange />
      <Sectors />
      <ClientLogos />
      <Editions />
      <Distribution />
      <Advertise />
      <Events />
      <Contact />
    </>
  );
}
