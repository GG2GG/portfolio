export interface Mission {
    id: string;
    title: string; // Added for display
    role: string;
    company: string;
    location: string;
    duration: string;
    category: string;
    summary: string;
    achievements: string[];
    stack: string[];
    logo: string;
    status: string; // Added for display
    hasCaseStudy?: boolean; // Added optional
}

export const missions: Mission[] = [
    {
        id: "MISSION_01",
        title: "AUTONOMOUS COMMERCE",
        role: "Technical Product Manager - AI Systems",
        company: "RadiusAI Inc.",
        location: "Bengaluru, IN",
        duration: "02/2024 - Present",
        category: "Artificial Intelligence",
        summary: "Spearheading the product vision for ShopAssist™, a proprietary Computer Vision platform enabling cashier-less checkout. Orchestrating the convergence of Edge AI, Real-time Inference, and Hardware capabilities to deliver 98% transaction accuracy across distributed retail environments.",
        achievements: [
            "Architected a 'Human-in-the-Loop' data pipeline, leveraging active learning to improve model recall by 15% quarter-over-quarter.",
            "Engineered a bespoke Point-of-Sale (POS) ecosystem in 4 months, eliminating dependency on legacy hardware and unlocking direct-to-consumer revenue channels.",
            "Deployed RAG-based autonomous agents using LangGraph to automate complex client reporting, reducing manual overhead by 40%.",
            "Scaled CV inference capabilities to handle 10,000+ distinct SKUs with sub-second latency.",
        ],
        stack: ["Python", "Computer Vision", "Edge AI", "RAG / LLMs", "Data Annotation", "Data Engineering", "MLOps", "UI/UX", "AI Product Development"],
        logo: "/assets/logos/radius.png",
        status: "Active",
        hasCaseStudy: true
    },
    {
        id: "MISSION_02",
        title: "ALGORITHMIC SCALE",
        role: "AVP - Growth & Market Expansion",
        company: "Ufaber Edutech",
        location: "Bengaluru, IN",
        duration: "10/2021 - 12/2023",
        category: "Growth Engineering",
        summary: "Owned the P&L and strategic roadmap for a high-growth vertical (1 Cr MRR). Pioneered a data-first approach to acquisition and retention, bridging the gap between marketing analytics and product features.",
        achievements: [
            "Engineered a referral loop system based on high-intent user signals, driving a 30% reduction in Customer Acquisition Cost (CAC).",
            "Stabilized a volatile 1 Cr+ MRR portfolio by implementing predictive churn modeling and automated retention workflows.",
            "Conducted extensive qualitative research (50+ interviews) to refine Product-Market Fit, directly influencing a 20% increase in market penetration.",
            "Developed internal automation tools that streamlined operations, boosting team efficiency by 30%."
        ],
        stack: ["Growth Strategy", "Data Science", "Workflow Automation", "P&L Management", "Retention Modeling", "A/B Testing", "Python Scripts", "CRM Analytics", "User Research"],
        logo: "/assets/logos/ufaber.jpeg",
        status: "Completed",
        hasCaseStudy: true
    },
    {
        id: "MISSION_03",
        title: "PREDICTIVE OPS",
        role: "Business Manager",
        company: "Think & Learn (Byju's)",
        location: "Bengaluru, IN",
        duration: "05/2018 - 04/2021",
        category: "Revenue Operations",
        summary: "Directed revenue strategy and customer lifecycle management for the world's leading Edtech firm. Leveraged granular data analytics to optimize sales funnels and drive sustainable revenue growth.",
        achievements: [
            "Generated INR 1.2 Cr in direct individual revenue while leading a high-performance pod to INR 3 Cr total output.",
            "Optimized lead allocation algorithms using SQL-driven behavior analysis, resulting in a 20% uplift in conversion rates.",
            "Designed and executed diversified lead generation campaigns to mitigate platform dependency.",
            "Mentored a team of 15+ associates, establishing data-driven performance metrics and sales protocols."
        ],
        stack: ["SQL", "Revenue Strategy", "Team Leadership", "Data Analytics", "Salesforce", "Excel Modeling", "Lead Gen", "Performance Mgmt"],
        logo: "/assets/logos/byjus.png",
        status: "Completed",
        hasCaseStudy: true
    }
];
