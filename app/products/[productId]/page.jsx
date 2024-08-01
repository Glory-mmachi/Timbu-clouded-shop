import { TopSeller } from "@/constants";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function page({ params }) {
  return (
    <>
      <Navbar />

      <div>
      <h1 className="flex justify-center items-center text-[32px] font-[700] text-[#183864] md:mt-[60px] mt-5 md:mb-[40px]">Top Selling Items</h1>
        {params.productId == "TopSeller"||"VintageShirts"||'PantCollections' ? (
          <div className="relative p-4 bg-white px[20px] md:px-[60px] flex justify-center items-center gap-6 flex-wrap">
            {TopSeller.map(
              (product) => product.id && <ProductCard product={product} />
            )}
          </div>
        ) : (
          ""
        )}
      </div>

      <Footer />
    </>
  );
}
