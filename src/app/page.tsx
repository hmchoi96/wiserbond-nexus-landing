import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import NexusHero from "@/components/landing/NexusHero";
import Sections from "@/components/landing/Sections";

export default function Page(){
  return (
    <>
      <Nav />
      <NexusHero />
      <Sections />
      <Footer />
    </>
  );
}
