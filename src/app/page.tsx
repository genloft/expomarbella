import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import TheChange from "@/components/sections/TheChange";
import Sectors from "@/components/sections/Sectors";
import Editions from "@/components/sections/Editions";
import Distribution from "@/components/sections/Distribution";
import Advertise from "@/components/sections/Advertise";
import Networking from "@/components/sections/Networking";
import Events from "@/components/sections/Events";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TheChange />
      <Sectors />
      <ClientLogos />
      <Editions />
      <Distribution />
      <Advertise />
      <Networking />
      <Events />
      <Testimonials />
      <Contact />
    </>
  );
}
