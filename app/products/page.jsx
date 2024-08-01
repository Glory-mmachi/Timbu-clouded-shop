import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ProductsList from "@/components/PoductsList";
import Link from "next/link";
import { TopSeller, VintageShirts, PantCollections } from "@/constants";

export default function page() {
  return (
    <section>
      <Navbar />

      <div className="mt-[40px] md:mt-[134px] md:px-[80px] w-full relative">
        <div className="relative text-[#183864] font-lora">
          <h2 className="text-[25px] md:text-[64px] font-lora font-[700]">
            Be a star
          </h2>
          <p className="text-[57px] text-wrap md:text-[104px] font-lora font-[700]">
            Rock Maedu
          </p>
        </div>
        <div className="w-full flex justify-end items-end relative">
          <Image
            className="absolute left-0 bottom-32 md:left-60 md:w-[363px] md:h-[367px] w-[249px] h-[251px]"
            src="/Wongn Men Fashion High Street Jeans Casual Harem Pants Letter Print Light Blue Sweatpants Trousers Drawstring Homens Jeans Denim Pants Blue-XXXL 1.svg"
            width={363}
            height={367}
            alt="jean"
          />

          <Image
            src="/Vector 6.svg"
            width={963}
            height={486}
            className="align-end h-[529px] md:w-[963px] "
            alt="vec"
          />
        </div>
      </div>

      {/* Top selling items */}
      <div className="flex justify-between items-center mt-[76px] px-[20px] md:px-[60px]">
        <h1 className="md:text-[32px] text-[20px] font-[700] text-[#183864]">
          Top selling items
        </h1>
        <Link
          href="/products/TopSeller"
          className="md:text-[28px] text-[16px] font-[600] text-[#883992]"
        >
          View All
        </Link>
      </div>
      <ProductsList products={TopSeller} />

      {/*  Vintage shirts */}
      <div className="flex justify-between items-center mt-[76px] px-[20px] md:px-[60px]">
        <h1 className="md:text-[32px] text-[20px] font-[700] text-[#183864]">
          Vintage shirts
        </h1>
        <Link
          href="/products/VintageShirts"
          className="md:text-[28px] text-[16px] font-[600] text-[#883992]"
        >
          View All
        </Link>
      </div>
      <ProductsList products={VintageShirts} number={5} />

      {/* Pant collections */}
      <div className="flex justify-between items-center mt-[76px] px-[20px] md:px-[60px]">
        <h1 className="md:text-[32px] text-[20px] font-[700] text-[#183864]">
          Pant collections
        </h1>
        <Link
          href="/products/PantCollections"
          className="md:text-[28px] text-[16px] font-[600] text-[#883992]"
        >
          View All
        </Link>{" "}
      </div>

      <ProductsList products={PantCollections} />
      <Footer />
    </section>
  );
}
