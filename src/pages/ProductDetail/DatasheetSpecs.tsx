import React, { useState } from "react";
import { FileText, Download, Check, Sliders, Cpu, BookOpen, Sparkles } from "lucide-react";
import type { ProductData } from "../../data/products";

interface DatasheetSpecsProps {
  product: ProductData;
}

export const DatasheetSpecs: React.FC<DatasheetSpecsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<"specs" | "models" | "downloads">("specs");

  // Graceful fallback technical parameters if extra is not provided
  const fallbackSpecs = product.category === "Solar Panels" ? [
    { label: "Cell Type", value: "High Efficiency Monocrystalline" },
    { label: "Module Efficiency", value: "Up to 22.5%" },
    { label: "Max Power Output", value: "440W" },
    { label: "Dimensions", value: "1722 x 1134 x 30 mm" },
    { label: "Weight", value: "21.5 - 22.0 kg" },
    { label: "Frame", value: "Anodized Aluminium Alloy" },
    { label: "Glass Type", value: "3.2mm tempered anti-reflective glass" },
    { label: "Junction Box", value: "IP68 Rated (3 bypass diodes)" },
  ] : product.category === "Solar Inverters" ? [
    { label: "Max Efficiency", value: "98.4%" },
    { label: "MPPT Trackers", value: "2 Trackers" },
    { label: "Protection Rating", value: "IP65 / IP66 (Outdoor)" },
    { label: "Backup Output", value: "Continuous power backup ready" },
    { label: "Cooling Method", value: "Natural Convection cooling" },
    { label: "Grid Standard", value: "AS/NZS 4777.2 compliant" },
  ] : [
    { label: "Battery Chemistry", value: "LiFePO4 (Lithium Iron Phosphate)" },
    { label: "Stackability", value: "Modular expandable stacking" },
    { label: "Depth of Discharge", value: "90% - 100% Usable" },
    { label: "Roundtrip Efficiency", value: "97.0% - 98.0%" },
    { label: "Protection Class", value: "IP65 Rated Casing" },
    { label: "Cooling Type", value: "Natural Passive Cooling" },
  ];

  const specs = product.datasheetSpecs && product.datasheetSpecs.length > 0
    ? product.datasheetSpecs
    : fallbackSpecs;

  const fallbackModels = [
    { name: `${product.brand} Standard Option 1`, watts: "5kW / 415W", efficiency: "21.5%", type: "Standard" },
    { name: `${product.brand} Premium Option 2`, watts: "6kW / 440W", efficiency: "22.3%", type: "Premium" },
  ];

  const modelsList = product.models && product.models.length > 0
    ? product.models
    : fallbackModels;

  const hasPdfs = product.pdfUrls && product.pdfUrls.length > 0;

  return (
    <div className="bg-white mx-auto max-w-7xl py-0 px-6 md:px-0" id="datasheet-section">

      {/* HEADER SECTION */}
      <div className="mb-6 space-y-4 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#004093]/5 rounded-full border border-[#004093]/10 text-[10px] font-black uppercase tracking-wider text-[#004093]">
          <Sparkles size={10} className="text-[#004093]" />
          Specifications Hub
        </span>

        <h3 className="text-3xl md:text-5xl font-black text-[#004093] leading-tight tracking-tight">
          Technical Datasheet &  <br />Specifications
        </h3>

        <p className="text-slate-900 text-sm md:text-base leading-relaxed font-medium max-w-7xl mx-auto">
          Explore complete parameters, download PDF documentation guides, or inspect variant system outputs.
        </p>
      </div>

      {/* DASHBOARD CONTAINER */}
      <div className=" overflow-hidden bg-slate-50/20 shadow-[0_15px_40px_rgba(10,31,68,0.03)] p-4 md:p-0">

        {/* TABS SWITCHER HEADER */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-400/60 pb-6 mb-8">

          <button
            onClick={() => setActiveTab("specs")}
            className={`inline-flex items-center gap-2 px-10 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${activeTab === "specs"
                ? "bg-[#004093] text-white shadow-md shadow-[#004093]/15 scale-[1.02]"
                : "bg-white border border-slate-300 text-slate-800 hover:border-slate-300"
              }`}
          >
            <Sliders size={14} />
            Technical Specs
          </button>

          <button
            onClick={() => setActiveTab("models")}
            className={`inline-flex items-center gap-2 px-10 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${activeTab === "models"
                ? "bg-[#004093] text-white shadow-md shadow-[#004093]/15 scale-[1.02]"
                : "bg-white border border-slate-300 text-slate-800 hover:border-slate-300"
              }`}
          >
            <Cpu size={14} />
            Available Models
          </button>

          {hasPdfs && (
            <button
              onClick={() => setActiveTab("downloads")}
              className={`inline-flex items-center gap-2 px-10 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${activeTab === "downloads"
                  ? "bg-[#004093] text-white shadow-md shadow-[#004093]/15 scale-[1.02]"
                  : "bg-white border border-slate-300 text-slate-800 hover:border-slate-300"
                }`}
            >
              <BookOpen size={14} />
              Official Downloads
            </button>
          )}

        </div>

        {/* TAB CANVAS CONTENT */}
        <div className="relative min-h-[300px]">

          {/* TAB 1: TECHNICAL SPECS LIST */}
          {activeTab === "specs" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 animate-fade-in">
              {specs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-4 border-b border-dashed border-slate-400/80 hover:bg-slate-50/30 px-3 transition duration-150"
                >
                  <span className="text-xs md:text-sm font-extrabold text-[#004093]">
                    {item.label}
                  </span>
                  <span className="text-xs md:text-sm font-semibold text-slate-800">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: AVAILABLE MODELS GRID */}
          {activeTab === "models" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {modelsList.map((model, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-400/80 hover:border-[#004093]/20 p-6 rounded-lg shadow-black transition duration-300 relative group flex flex-col justify-between min-h-[160px] shadow-lg hover:shadow-md"
                >
                  <div className="space-y-3">
                    <span className="inline-block text-[9px] font-black text-[#FE9900] bg-[#FE9900]/10 px-2 py-0.5 rounded uppercase tracking-wider">
                      {model.type} Option
                    </span>
                    <h5 className="text-base font-extrabold text-[#004093] leading-tight">
                      {model.name}
                    </h5>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                    <span>Power: {model.watts}</span>
                    <span className="text-emerald-600 font-extrabold">{model.efficiency}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: OFFICIAL PDF DOWNLOADS */}
          {activeTab === "downloads" && hasPdfs && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">

              {/* Manufacturer Information Card */}
              <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-[#004093] to-[#00285c] p-6 md:p-8 text-white flex flex-col justify-between min-h-[220px]">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                    <Check size={18} className="text-[#FE9900]" />
                  </div>
                  <h4 className="text-lg font-extrabold tracking-tight">Verified Manufacturer Documentation</h4>
                  <p className="text-white/80 text-xs leading-relaxed font-medium">
                    All document guidelines, safety certificates, and warranty conditions comply strictly with current SAA Australian Solar Installation parameters.
                  </p>
                </div>
              </div>

              {/* PDF Document List */}
              <div className="flex flex-col gap-4">
                {product.pdfUrls?.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-white border border-slate-400/80 shadow-lg shadow-black hover:border-[#004093]/20 rounded-2xl transition duration-300 gap-4 group "
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#004093]/5 text-[#004093] group-hover:bg-[#004093] group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h5 className="text-sm font-extrabold text-slate-800 leading-tight">
                          {item.label} Datasheet
                        </h5>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mt-0.5">
                          Official PDF Brochure
                        </span>
                      </div>
                    </div>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FE9900] hover:bg-[#e08600] text-white px-5 py-3 rounded-xl text-xs font-black transition-all duration-300 shadow-sm shadow-[#FE9900]/15 hover:scale-[1.02] cursor-pointer"
                    >
                      <Download size={14} />
                      Download
                    </a>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};
