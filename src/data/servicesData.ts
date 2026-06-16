export interface ServiceData {
  title: string
  heroSubtitle: string
  introTitle: string
  introDesc: string
  features: {
    title: string
    desc: string
  }[]
  difference: {
    title: string
    desc: string
  }[]
}

export const SERVICES_PAGES_DATA: Record<string, ServiceData> = {
  "installation": {
    title: "Solar Panel Installation",
    heroSubtitle: "Clean Energy Council (CEC) Accredited Solar Engineering & Integration",
    introTitle: "Professional Installation Engineered for Australian Conditions",
    introDesc: "SolEarth Energy provides full end-to-end solar design and installation. Our licensed, CEC-accredited electrical engineers ensure that your solar array, string wiring, and smart inverters are set up safely to yield maximum power output for decades.",
    features: [
      {
        title: "Site Survey & Engineering Design",
        desc: "We analyze your roof pitch, shading angles, and electrical load parameters to custom-tailor a solar layout that maximizes sun exposure."
      },
      {
        title: "CEC Accredited Workmanship",
        desc: "Our installers are highly certified professionals who follow all Australian safety standards, ensuring a robust, waterproof roof mounting setup."
      },
      {
        title: "Grid Connection & Smart Meters",
        desc: "We handle the entire application and inspection process with your local distribution network to get your smart meter configured and online."
      }
    ],
    difference: [
      {
        title: "10-Year Workmanship Warranty",
        desc: "We fully guarantee the quality of our wiring, framing mounts, and penetrations. Any issues are addressed at zero cost to you."
      },
      {
        title: "Approved Solar Retailer",
        desc: "We strictly adhere to the Clean Energy Council Approved Code of Conduct, ensuring fair sales representation and complete consumer protection."
      },
      {
        title: "Zero Down Financing Available",
        desc: "Upgrade your property to solar today with zero upfront cost using our highly competitive, flexible repayment partners."
      }
    ]
  },
  "cleaning": {
    title: "Solar Panel Cleaning",
    heroSubtitle: "Restore System Performance & Maximize Daily Clean Energy Yield",
    introTitle: "Why Professional Cleaning Matters for Your Investment",
    introDesc: "Dust, leaves, salt-mist, and bird droppings build up over time and create localized hot spots, reducing your solar panel output by up to 20%. Professional cleaning removes this layer safely without scratching the delicate anti-reflective glass coatings.",
    features: [
      {
        title: "Pure Water Washing Systems",
        desc: "We use specialized de-ionized pure water filtration systems that clean panels cleanly without leaving streaks or mineral scale residue."
      },
      {
        title: "Anti-Scratch Solar Brushes",
        desc: "Our technicians utilize heavy-duty, ultra-soft rotating carbon brushes specifically designed not to micro-scratch solar glass coatings."
      },
      {
        title: "Safety Rigging & Roof Harnesses",
        desc: "All technicians are fully trained in working at heights, using professional roof harness anchors, ropes, and scaffolding setup."
      }
    ],
    difference: [
      {
        title: "Immediate Efficiency Restored",
        desc: "Clean panels capture more photons, resulting in an immediate boost in daily kilowatt-hour generation and lower utility bills."
      },
      {
        title: "Inverter and String Inspection",
        desc: "During cleaning, we perform a visual inspection of your framing rails, cable ties, and glass junctions to identify early wear."
      },
      {
        title: "Scheduled Maintenance Contracts",
        desc: "Keep your system clean year-round with our discounted semi-annual or annual scheduled cleaning maintenance plans."
      }
    ]
  },
  "maintenance": {
    title: "Solar Panel Maintenance & Repairs",
    heroSubtitle: "Diagnostic Testing, Compliance Audits, and Inverter System Repairs",
    introTitle: "Professional System Health Audits & Fault Rectification",
    introDesc: "Is your inverter displaying a red warning light, or has your power generation dropped unexpectedly? SolEarth Energy's maintenance engineers conduct diagnostic testing to locate ground faults, hot spots, or wiring issues.",
    features: [
      {
        title: "Inverter Diagnostic & Replacements",
        desc: "We perform full diagnostics on GoodWe, Sungrow, Solis, and other leading inverter brands, managing warranty replacements when needed."
      },
      {
        title: "Thermal Imaging Inspections",
        desc: "Using advanced thermal imaging cameras, we locate micro-cracks and hot-spot cells that could lead to panel degradation or safety hazards."
      },
      {
        title: "Compliance & Safety Audits",
        desc: "We audit older systems to ensure they comply with updated AS/NZS 5033 standards, upgrading isolators and conduit routing where needed."
      }
    ],
    difference: [
      {
        title: "Licensed Solar Electricians",
        desc: "All maintenance work is executed by fully licensed, Clean Energy Council accredited technicians specializing in high-voltage DC arrays."
      },
      {
        title: "Comprehensive Report Provided",
        desc: "Upon completion, you receive a detailed compliance report, thermal scan images, inverter logs, and performance metrics."
      },
      {
        title: "Rapid Response Dispatch",
        desc: "For system faults or grid isolation issues, our support coordinators dispatch service vehicles quickly across Sydney and Brisbane metro areas."
      }
    ]
  }
}
