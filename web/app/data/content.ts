import { getAssetPath } from '../utils/assets';

export const portfolioData = {
    hero: {
        title: "Gautham",
        lastName: "Ganesh",
        role: "AI Product Manager",
        tagline: "Building Products with Intelligence for the Real World."
    },
    about: {
        title: "About Me",
        description: "I am a Technical Product Manager with a strong background in software engineering. I specialize in translating complex technical requirements into user-centric product strategies. My expertise lies in building scalable cloud infrastructure, AI-driven applications, and developer platforms.",
        skills: ["Product Strategy", "CV & GenAI", "Data Engineering", "Agile Leadership", "Analytics", "AI/ML Integration", "Growth Hacking", "MLOps", "Product R&D"]
    },
    experience: [
        {
            id: 1,
            role: "Senior Technical Product Manager",
            company: "Tech Corp",
            period: "2023 - Present",
            description: "Leading the Core Platform team. Optimized system latency by 40% through microservices migration. Launched the new Developer Portal, increasing API adoption by 200% in Q1."
        },
        {
            id: 2,
            role: "Product Manager",
            company: "Innovation Labs",
            period: "2020 - 2023",
            description: "Managed the lifecycle of 'SmartInsights', an AI-driven analytics tool. Achieved product-market fit with 50k+ DAU. Facilitated cross-functional alignment between Engineering, Design, and Sales."
        },
        {
            id: 3,
            role: "Software Engineer",
            company: "Startup Inc",
            period: "2018 - 2020",
            description: "Full-stack development using React and Node.js. Transitioned into product management to bridge technical gaps. Built the initial MVP for the flagship mobile app."
        }
    ],
    projects: [
        {
            id: 1,
            title: "QuickSKU",
            slug: "quicksku",
            category: "RAG / Computer Vision",
            description: "Solved the 'cold start' problem for retail items by enabling rapid, edge-based data collection and few-shot training. Built the user-facing app for data capture and the backend retrieval system using RAG.",
            image: getAssetPath("/assets/quicksku-visual.png"),
            link: "/case-studies/quicksku",
            caseStudy: {
                problem: "Retailers struggle with the 'Cold Start' problem in Computer Vision: initializing recognition models for thousands of new SKUs requires massive labeled datasets, which are expensive and slow to acquire.",
                solution: "Developed 'QuickSKU', an Edge-AI mobile application that allows store associates to capture 360-degree video of new products. A few-shot learning pipeline runs locally on the device to generate embeddings instantly, while a cloud-based RAG system indexes the metadata.",
                impact: "Reduced new product onboarding time from 3 weeks to 2 minutes. Enabled real-time inventory tracking for 500+ daily new SKUs without manual training cycles.",
                features: ["On-Device Few-Shot Training", "Real-time Vector Indexing", "Offline Mode Synchronization", "3D Object Reconstruction"],
                challengeImage: getAssetPath("/assets/quicksku-challenge.png"),
                solutionImage: getAssetPath("/assets/quicksku-solution.png"),
                impactImage: ""    // <--- Add path here (e.g. /assets/impact.jpg)
            }
        },
        {
            id: 2,
            title: "POS Backend Service",
            slug: "pos-backend",
            category: "Backend Engineering",
            description: "Engineered a custom POS backend to bridge AI inference with product databases. Integrated features like tips, rewards redemption, and 3rd-party POS terminal connectivity.",
            image: getAssetPath("/assets/pos-backend-banner.png"),
            link: "/case-studies/pos-backend",
            caseStudy: {
                problem: "Legacy POS systems were incompatible with real-time AI checkout flows. Data latency and API rate limits prevented the seamless 'Grab and Go' experience customers expected.",
                solution: "Architected a high-concurrency middleware service using  python. The system acts as a bridge, ingesting high-frequency inference events from the CV engine and converting them into atomic cart transactions. These transaction were also locally stored and later synced to cloud for next set of actions.",
                impact: "Achieved sub-200ms transaction finality. ",
                features: ["RESTful High-Performance API", "Event-Sourcing Architecture", "Loyalty Program Integration", "Payment Program Integration"],
                challengeImage: getAssetPath("/assets/pos-backend-challenge.png"),
                solutionImage: getAssetPath("/assets/pos-backend-solution.png"),
                impactImage: ""
            }
        },
        {
            id: 3,
            title: "Customer Facing PWA",
            slug: "customer-pwa",
            category: "Frontend / UX",
            description: "Designed and built the complete user journey for a cashier-less checkout experience. Included a dual-interface system for customers and cashiers with real-time sync.",
            image: getAssetPath("/assets/customer-pwa-banner.png"),
            heroStyle: "aspect-video",
            link: "/case-studies/customer-pwa",
            caseStudy: {
                problem: "The Cashier Interface gives staff full operational control. They can verify items, handle overrides, apply discounts, and monitor active sessions.",
                solution: "The Customer Interface focuses on speed and simplicity. Users verify their cart, select a tip, apply coupons, and checkout.",
                impact: "",
                features: ["Real-time Sync", "Dual-Interface", "Coupon System", "Tip Management"],
                challengeImage: "",
                challengeGallery: [getAssetPath("/assets/cashier-1.png"), getAssetPath("/assets/cashier-2.png"), getAssetPath("/assets/cashier-3.png")],
                solutionGallery: [getAssetPath("/assets/customer-pwa-landing.png"), getAssetPath("/assets/customer-2.png")],
                solutionImage: "",
                solutionImagePortrait: true,
                impactImage: "",
                sectionTitles: {
                    problem: "Cashier Interface",
                    solution: "Customer Interface",
                    impact: ""
                }
            }
        },
        {
            id: 4,
            title: "CVAT Automation Pipeline",
            slug: "cvat-automation",
            category: "MLOps / Automation",
            description: "Automated data annotation using pre-trained CV models and graph clustering. Drastically reduced manual labeling time by clustering similar products for bulk review.",
            image: getAssetPath("/assets/cvat-banner.png"),
            link: "/case-studies/cvat-automation",
            caseStudy: {
                problem: "Manual data annotation was the bottleneck for model improvement. Annotators spent 80% of their time labeling practically identical images.",
                solution: "Created an automated pre-labeling pipeline using Graph Neural Networks (GNN) to cluster similar image frames. Only the cluster centroids required human review, propagating labels to the entire group.",
                impact: "Reduced annotation cost by 70%. Accelerated model iteration cycles from 2 weeks to 3 days.",
                features: ["Graph Clustering Algorithms", "CVAT Plugin Development", "Active Learning Loop", "Automated QA Checks"],
                challengeImage: getAssetPath("/assets/cvat-challenge.png"),
                solutionImage: getAssetPath("/assets/cvat-solution.png"),
                impactImage: ""
            }
        },
        {
            id: 5,
            title: "Retail Scale AI Models",
            slug: "retail-ai",
            category: "AI / Machine Learning",
            description: "Developed and scaled computer vision models to identify up to 10,000 retail products. Managed the lifecycle from initial POCs to large-scale edge deployment.",
            image: getAssetPath("/assets/retail-ai-banner.png"),
            link: "/case-studies/retail-ai",
            caseStudy: {
                problem: "Standard detection models failed to distinguish between fine-grained retail classes (e.g., Coke Zero vs Coke Regular) at scale under varying lighting conditions.",
                solution: "Implemented a hierarchical classification architecture with domain-specific synthetic data generation. Utilized quantization-aware training to fit high-accuracy models onto Edge TPUs.",
                impact: "Achieved 99.1% F1 Score on fine-grained classification. Deployed successfully to 500+ edge devices with remote OTA management.",
                features: ["Synthetic Data Generation", "Model Quantization (Int8)", "Hierarchical Classification", "Edge TPU Optimization"],
                challengeImage: getAssetPath("/assets/retail-ai-challenge.png"),
                solutionImage: getAssetPath("/assets/retail-ai-solution.png"),
                impactImage: ""
            }
        }
    ],
    contact: {
        email: "gautham.ganesh212@gmail.com",
        linkedin: "linkedin.com/in/gg2gg",
        x: "https://x.com/GauthamGanesh02",
        github: "github.com/gg2gg",
        phone: "+91 96008 81851"
    }
};
