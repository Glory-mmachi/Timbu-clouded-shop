import { FOOTER_LINKS, SOCIALS, PAYMENT } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="md:px-[120px] px-[18px]">
      {/* top */}

      <section className="flex flex-col md:flex-wrap gap-[20px] w-full md:flex-row pt-[43px]">
        {/* left */}
        <div className="pt-[80px] md:order-none order-2 justify-start text-start flex flex-row md:flex-nowrap flex-wrap gap-[30px] md:gap-4 ">
          {FOOTER_LINKS.map((column) => (
            <FooterColumn title={column.title}>
              <ul className=" flex flex-col gap-[10px] text-gray-30">
                {column.links.map((link) => (
                  <Link
                    className="text-[16px] font-[400]"
                    href="/"
                    key={link.key}
                  >
                    {link}
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          ))}
        </div>
        {/* right */}
        <div className="flex md:order-none order-1 flex-col">
          <div
            className="flex flex-col justify-end items-end 
          "
          >
            <Image src="/Group.svg" width={160} height={41} />
            <p className="text-[#9F42AA] text[16px]">With Love From Africa</p>
          </div>
          <div className="md:pl-5 mt-[60px]">
            <div>
              <h2 className="text-2xl font-semibold mb-4">New to Maedu?</h2>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to get latest updates on our offers.
              </p>
              <form className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-[20px]">
  <input
    type="email"
    placeholder="Enter your email"
    required
    className="w-full md:w-[374px] p-3 border text-[#898384] border-gray-300 rounded-md bg-[#E3E3E3] focus:outline-none focus:border-purple-500"
  />
  <button
    type="submit"
    className="p-[10px] bg-[#5E2764] text-white rounded-md w-full md:w-[155px] h-[50px]"
  >
    Subscribe
  </button>
</form>

            </div>
          </div>
        </div>
      </section>

      {/* down */}
      <section className="flex flex-col md:flex-row items-start md:items-center justify-start text-start w-full gap-[30px] md:gap-[70px] mt-[46px]">
  {/* left */}
  <div className="w-full md:w-auto">
    <FooterColumn padding={"70px"} title={PAYMENT.title}>
      <ul className="flex flex-row flex-wrap gap-[20px] md:gap-[40px] text-[16px] py-[10px] text-gray-30">
        {PAYMENT.links.map((link) => (
          <Link href="/" key={link}>
            <Image src={link} alt="logo" width={50} height={50} />
          </Link>
        ))}
      </ul>
    </FooterColumn>
  </div>

  {/* right */}
  <div className="w-full md:w-auto pl-0 md:pl-[28px]">
    <FooterColumn title={SOCIALS.title}>
      <ul className="flex flex-wrap gap-[20px] md:gap-[40px] text-gray-30">
        {SOCIALS.links.map((link) => (
          <Link href="/" key={link}>
            <Image src={link} alt="logo" width={40} height={40} />
          </Link>
        ))}
      </ul>
    </FooterColumn>
  </div>
</section>

    </footer>
  );
}

const FooterColumn = ({ padding, title, children }) => {
  return (
    <div className="flex flex-col gap-[12px]">
      <h4
        className={`text-[#183864] text-[24px] from-neutral-600 py-[${
          padding ? padding : ""
        }]`}
      >
        {title}
      </h4>
      {children}
    </div>
  );
};
