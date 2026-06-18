import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { productsData } from "../../data/products";
import { ProductHero } from "./ProductHero";
import { TrustStrip } from "./TrustStrip";
import { ProductGalleryAndStats } from "./ProductGalleryAndStats";
import { WhyChooseBrand } from "./WhyChooseBrand";
import { RangeSpecs } from "./RangeSpecs";
import { TechnicalAdvantages } from "./TechnicalAdvantages";
import { DatasheetSpecs } from "./DatasheetSpecs";
import { InstallationBestFor } from "./InstallationBestFor";
import { WhyAussieDifference } from "./WhyAussieDifference";
import { WarrantySupport } from "./WarrantySupport";
import { ProductFAQ } from "./ProductFAQ";

const ProductDetailMain: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find product from productsData
  const product = slug ? productsData[slug] : undefined;

  // Scroll to top on load or when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-20 px-6 text-center">
        <h2 className="text-3xl font-bold font-serif text-[#1B74BB] mb-4">
          Product Not Found
        </h2>
        <p className="text-slate-800 mb-8 max-w-md">
          The product you are looking for does not exist or may have been moved.
        </p>
        <Link
          to="/"
          className="bg-[#FCC200] hover:bg-[#e08600] text-white px-8 py-3.5 rounded-full font-black tracking-wide uppercase shadow-lg shadow-[#FCC200]/25 transition"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <ProductHero product={product} />
      <TrustStrip />

      <div className="space-y-16 py-12">
        <ProductGalleryAndStats product={product} />

        <WhyChooseBrand product={product} />

        <RangeSpecs product={product} />

        <TechnicalAdvantages product={product} />

        <DatasheetSpecs product={product} />

        <InstallationBestFor product={product} />

        <WhyAussieDifference />

        <WarrantySupport product={product} />

        <ProductFAQ product={product} />

      </div>
    </>
  );
};

export default ProductDetailMain;
