import ProductCard from "@/components/ProductCard";

export default function PoductsList({ products }) {
  return (
    <div className="relative p-4 bg-white px[20px] md:px-[60px] flex justify-center items-center gap-6 flex-wrap">
      {products.map(
        (product) =>
          product.id < 5 && <ProductCard product={product} />
      )}
    </div>
  );
}
