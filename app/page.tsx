// import Image from "next/image";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Nav from "./components/Nav";
import Quotes from "./components/Quotes";
import Technologies from "./components/Technologies";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen px-8 pb-20 gap-16 ">
      <main className="flex flex-col gap-[32px] m-auto max-w-[800px]">
        <Nav />   
       <Hero />

       <Highlights  />
       <Technologies />
       <Quotes />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
