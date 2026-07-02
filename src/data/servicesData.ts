export interface ServiceData {
  title: string
  heroSubtitle: string
  heroImage: string
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
  processSteps: {
    step: string
    title: string
    desc: string
  }[]
}

export const SERVICES_PAGES_DATA: Record<string, ServiceData> = {
  "installation": {
    title: "Solar Panel Systems Installation in Sydney ",
    heroSubtitle: "CEC-Accredited Solar Panel Systems Installation in Sydney, delivering expert system design, compliant installation, premium components, and long-term energy savings for homes and businesses.",
    heroImage: "/images/solar/solar-residential-house.webp",
    introTitle: "Professional Installation Engineered for Australian Conditions",
    introDesc: "SolEarth Energy provides full end-to-end solar design and installation. Our licensed, CEC-accredited electrical engineers ensure that your solar array, string wiring, and smart inverters are set up safely to yield maximum power output for decades.",
    features: [
      {
        title: "Site Survey & Solar System Design",
        desc: "Our comprehensive solar site assessment evaluates roof orientation, shading, energy usage, and electrical infrastructure to create a customized solar system design that maximizes energy generation and long-term savings."
      },
      {
        title: "CEC Accredited Solar Installation",
        desc: "Our CEC accredited solar installers follow Australian standards and industry best practices to ensure safe, compliant, and high-quality solar panel installation for lasting performance."
      },
      {
        title: "Grid Connection & Smart Meter Setup",
        desc: "We manage the complete grid connection approval and smart meter installation process, ensuring your solar power system is connected, compliant, and ready to export excess energy to the grid."
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
    ],
    processSteps: [
      { step: "01", title: "Site Assessment & Proposal", desc: "We review your roof layout, electricity usage bills, and shading profile to build a custom engineering proposal." },
      { step: "02", title: "Engineering & DNSP Approval", desc: "Our team drafts structural schematics and files the connection approvals with the local energy network." },
      { step: "03", title: "CEC Deployment & Install", desc: "A qualified team of solar electricians completes the installation, grid testing, and meter configuration in 1–2 days." }
    ]
  },
  "cleaning": {
    title: "Solar Panel Cleaning Services in Australia",
    heroSubtitle: "Professional solar panel cleaning services that help improve solar efficiency, maximize energy generation, and extend the lifespan of your solar power system across Australia.",
    heroImage: "/images/solar/solar-inverter-tech.webp",
    introTitle: "Why Professional Cleaning Matters for Your Investment",
    introDesc: "Dust, leaves, salt-mist, and bird droppings build up over time and create localized hot spots, reducing your solar panel output by up to 20%. Professional cleaning removes this layer safely without scratching the delicate anti-reflective glass coatings.",
    features: [
      {
        title: "Pure Water Solar Panel Cleaning",
        desc: "Our solar panel cleaning service uses de-ionized pure water technology to remove dust, dirt, bird droppings, and contaminants without leaving residue, helping improve solar panel efficiency and maximize energy generation."
      },
      {
        title: "Non-Abrasive Solar Cleaning Brushes",
        desc: "We use specialized soft-bristle equipment designed for solar panel maintenance, ensuring effective cleaning without damaging solar glass, coatings, or panel surfaces."
      },
      {
        title: "Professional Roof Safety Systems",
        desc: "Our trained technicians follow industry-approved safety procedures for solar panel cleaning services in Australia, using certified roof access systems and fall-protection equipment."
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
    ],
    processSteps: [
      { step: "01", title: "Visual Safety Inspection", desc: "Technicians survey the roof layout, framing integrity, and cable placement before cleaning begins." },
      { step: "02", title: "De-Ionized Water Rinse", desc: "High-grade pure water is applied with specialized rotating soft-bristle brushes to lift dirt and scale without scratching." },
      { step: "03", title: "Post-Clean Performance Audit", desc: "We review generation levels on your smart meter dashboard to verify immediate kilowatt output improvement." }
    ]
  },
  "maintenance": {
    title: "Solar Panel System Maintenance in Australia ",
    heroSubtitle: "Expert maintenance, fault detection, inverter repairs, and solar panel cleaning services designed to maximize solar performance and ensure reliable energy production year-round. ",
    heroImage: "/images/solar/battery-storage-unit.webp",
    introTitle: "Professional System Health Audits & Fault Rectification",
    introDesc: "Is your inverter displaying a red warning light, or has your power generation dropped unexpectedly? SolEarth Energy's maintenance engineers conduct diagnostic testing to locate ground faults, hot spots, or wiring issues.",
    features: [
      {
        title: "Inverter Testing & Repair Services",
        desc: "Our solar inverter maintenance service includes advanced diagnostics, fault detection, performance testing, and inverter repairs to restore system efficiency and maximize solar energy production."
      },
      {
        title: "Solar Panel Thermal Imaging Inspection",
        desc: "Using advanced thermal imaging technology, we identify hot spots, faulty cells, wiring issues, and hidden defects that can reduce solar panel performance and energy output."
      },
      {
        title: "Solar System Safety & Compliance Audits",
        desc: "Our solar panel system maintenance in Australia includes comprehensive safety inspections, compliance checks, and performance assessments to ensure your solar system operates safely, efficiently, and in accordance with Australian standards."
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
    ],
    processSteps: [
      { step: "01", title: "Telemetry & Fault Diagnostics", desc: "We pull your inverter log history and check string resistance to locate ground faults or component errors." },
      { step: "02", title: "Thermal Imaging Scans", desc: "Our technicians run thermal diagnostic scanners over the modules to discover hidden micro-cracks and hot-spots." },
      { step: "03", title: "Part Swaps & Compliance Certification", desc: "Broken DC isolators or inverters are replaced, followed by a full AS 3000 safety compliance recertification." }
    ]
  }
}
