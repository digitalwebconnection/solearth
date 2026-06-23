import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
import { ProductFAQ, getProductFAQs } from "./ProductFAQ";

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

  const faqs = getProductFAQs(product);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{product.seo.metaTitle}</title>
        <meta name="description" content={product.seo.metaDescription} />
        <meta
          name="keywords"
          content={[
            product.seo.focusKeyword,
            ...product.seo.secondaryKeywords,
          ].join(", ")}
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <ProductHero product={product} />
      <TrustStrip product={product} />

      <div className="space-y-6 py-12">
        <ProductGalleryAndStats product={product} />

        <WhyChooseBrand product={product} />

        <RangeSpecs product={product} />

        <TechnicalAdvantages product={product} />

        <DatasheetSpecs product={product} />

        <InstallationBestFor product={product} />

        <WhyAussieDifference product={product} />

        <WarrantySupport product={product} />

        <ProductFAQ product={product} />
      </div>
    </>
  );
};

export default ProductDetailMain;
