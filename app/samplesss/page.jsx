import Image from "next/image";
import React from "react";
const PRODUCTS1 = [
    {
      name: "Brown Leather Shirt",
      description: "Brown",
      price: 1400,
      image: "/Ralph Lauren Purple Label Pre Spring 2022 1.svg"
    },
    {
      name: "Affluent Vintage",
      description: "Black",
      price: 90,
      image: "/2dd07004-253f-41a9-b46a-882d0d7bacc9 1.svg"
    },
    {
      name: "Pant",
      description: "Gray",
      price: 175,
      image: "/Gray Pant & white polo 3.svg"
    },
    {
      name: "Pant",
      description: "Retro Jeans",
      price: 130,
      image: "/Men's Straight Ripped Jeans - Blue _ 5XL 1.svg"
    }
  ];
  

export default function page() {
  return (
    <div>
      {PRODUCTS1.map((product) => (
        <div key={product.price}>
            <p>{product.name}</p>
            <h1>{product.description}</h1>
            <Image src={product.image} width={345} height={345}/>
        </div>
        
      ))}
    </div>
  );
}
