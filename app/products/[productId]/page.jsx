import { TopSeller, VintageShirts, PantCollections } from "@/constants";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page({ params }) {
  const items = [
    { id: "TopSeller", data: TopSeller, displayName: "Top Selling Items" },
    { id: "VintageShirts", data: VintageShirts, displayName: "Vintage Shirts" },
    { id: "PantCollections", data: PantCollections, displayName: "Pant Collections" },
  ];

  const filteredItem = items.find((item) => item.id === params.productId);

  return (
    <>
      <Navbar />
      <div>
        <h1 className="flex justify-center items-center text-[32px] font-[700] text-[#183864] md:mt-[60px] mt-5 md:mb-[40px]">
          {filteredItem?.displayName || "Top Selling Items"}
        </h1>
        {filteredItem?.data ? (
          <div className="relative p-4 bg-white px-[20px] md:px-[60px] flex justify-center items-center gap-6 flex-wrap">
            {filteredItem.data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products available.</p>
        )}
      </div>

      <Footer />
    </>
  );
}
