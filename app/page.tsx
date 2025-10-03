// import Image from "next/image";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen px-8 pb-20 gap-16 ">
      <main className="flex flex-col gap-[32px]">
        <Nav />
       <Hero />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
