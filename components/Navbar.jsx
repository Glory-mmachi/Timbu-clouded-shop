"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SideNav from "@/components/SideNav";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <section className="bg-[#160632] px-[20px] md:px-[120px] py-[16px]">
      <div className="flex justify-between items-center pb-[32px]">
        <Image
          src="/Group.svg"
          className="w-[70px] h-[17px]"
          width={160}
          height={41}
        />
        <Image
          onClick={toggleNav}
          className="md:hidden"
          src="/MenuVector.svg"
          width={30}
          height={20}
        />
        <div className="hidden md:flex gap-[20px] ">
          <Image src="/tabler_basket.png" className="" width={30} height={6} />
          <Image src="/mingcute_notification-line.png" width={30} height={6} />
          <Image src="/Vector.svg" width={30} height={6} />
        </div>
      </div>
      <div className="hidden md:flex w-full h-[1px] bg-white "></div>
      <ul className="hidden text-white md:flex my-[12px] gap-6">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/products">
          <li>Store</li>
        </Link>
        <li>Style</li>
        <li>About</li>
      </ul>
      <SideNav isOpen={isNavOpen} toggleNav={toggleNav} />
    </section>
  );
}
