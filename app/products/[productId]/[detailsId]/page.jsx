"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { TopSeller, VintageShirts, PantCollections } from "@/constants";

export default function Page({ params }) {
  const [clickedSize, setClickedSize] = useState(null);
  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

  // Combine all products into one array for easier searching
  const allProducts = [...TopSeller, ...VintageShirts, ...PantCollections];

  // Replace '%20' with a space in params.detailsId
  const formattedId = params.detailsId ? params.detailsId.replace(/%20/g, " ") : "";

  // Find the product based on the formatted product name
  const product = allProducts.find((p) => p.name === formattedId);

  if (!product) {
    return (
      <div>
        <Navbar />
        <h1 className="text-center text-2xl mt-10">Product not found</h1>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="md:px-[120px] px-[18px] pt-[81px] flex flex-col md:flex-row gap-[46px]">
        <div className="relative w-full md:w-1/2"> {/* Ensure the image container takes up half the width on larger screens */}
          <Image
            src={product.image}
            width={485}
            height={505}
            alt={product.name}
            className="rounded-lg w-full h-auto" // Make the image responsive
          />
        </div>

        <div className="flex flex-col gap-[4px] w-full md:w-1/2"> {/* Ensure the details container takes up half the width on larger screens */}
          <h3 className="mt-4 text-[24px] font-[400] text-[#183864]">{product.name}</h3>
          <p className="text-[20px] font-[600] text-[#183864]">${product.price}</p>
          <div className="flex items-center">
            <p className="text-[20px] font-[400]">5.0</p>
            <ul className="flex pl-[10px]">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <li key={index}>
                  <Image
                    src="/solar_star-bold.svg"
                    width={24}
                    height={24}
                    alt="Star"
                  />
                </li>
              ))}
            </ul>
            <Link
              href="/"
              className="text-[18px] pl-[59px] font-[400] text-[#883992]"
            >
              See all reviews
            </Link>
          </div>

          <h2 className="text-[20px] pl-[10px]">Color</h2>
          <div className="flex gap-[10px]">
            <Image
              src="/material-symbols-light_radio-button-checked.svg"
              width={50}
              height={50}
              alt="Color Option 1"
              className="w-[50px] h-[50px] rounded-full"
            />
            <Image
              src="/Frame 222.png"
              width={50}
              height={50}
              alt="Color Option 2"
              className="w-[50px] h-[50px] rounded-full"
            />
          </div>

          <h2 className="text-end text-[#883992] text-[18px] pt-[52px]">Size guide</h2>
          <ul className="flex gap-[12px] pt-[18px] text-[#183864] flex-wrap">
            {sizes.map((size, index) => (
              <li
                key={index}
                className={`cursor-pointer shadow-lg w-[72px] text-center ${
                  clickedSize === size ? "bg-[#883992] text-white" : ""
                }`}
                onClick={() => setClickedSize(size)}
              >
                <p className="text-[20px] font-[400] p-[10px] border border-[#183864] rounded-[4px]">
                  {size}
                </p>
              </li>
            ))}
          </ul>
          <Link
            href="/"
            className="w-full md:w-[578px] h-[70px] bg-[#5E2764] flex justify-center items-center gap-[10px] rounded-[8px] mt-[30px]"
          >
            <span>
              <Image
                src="/tabler_basket.svg"
                width={40}
                height={40}
                alt="Basket Icon"
              />
            </span>
            <button className="text-[#FCFCFC] text-[24px]">Add To Cart</button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
