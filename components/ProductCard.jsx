// components/ProductCard.js

import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <>
      <div key={product.id}>
        <div className="relative ">
          <div className="absolute top-2 right-2 bg-[#F2F2F2]  rounded-full w-10 h-10 flex justify-center items-center">
            <Image
              src="/mdi_heart-outline.svg"
              width={24}
              height={24}
              alt="Favorite"
            />
          </div>
          <Image
            src={product.image}
            width={284}
            height={104}
            alt={product.name}
            className="rounded-lg"
          />
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900">
          {product.name}
        </h3>
        <p className="text-[20px] font-[400] text-[#183864]">{product.description}</p>
        <p className="text-gray-[#183864]">${product.price}</p>
      </div>
    </>
  );
}
