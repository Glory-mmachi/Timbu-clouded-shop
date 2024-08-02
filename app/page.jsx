import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Poppins, Lora } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Specify the weights you need as literals
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need as literals
});

export default function Home() {
  return (
    <div className={poppins.className}>
      <Navbar />
      <section className="relative flex flex-row">
      <Link href='/products'>

        <button className="absolute border-4 border-[#012436] md:py-3 py-2 px-10 md:px-20 top-[50%] md:left-[40%] left-[20%]">
          Discover
        </button>
      </Link>
        <div className="hidden md:flex">
          <Image
            src="/download (12) 1.svg"
            className="w-full"
            width={736}
            height={41}
            alt="Image 1"
          />
        </div>
        <div>
          <Image
            src="/Alexander McQueen 1.svg"
            className="w-full"
            width={736}
            height={11}
            alt="Image 2"
          />
        </div>
      </section>
      <Footer />
     
    </div>
  );
}
