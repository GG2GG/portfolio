export const projects = [
    {
        slug: "shopassist-ai",
        title: "ShopAssist Core",
        role: "ML Engineer & Data Ops",
        description: "End-to-end computer vision pipeline for retail stadiums.",
        content: {
            problem: "Stadiums needed real-time product recognition without latency.",
            solution: "Built a complete loop: Data collection, cleaning, annotation, training, and fine-tuning. Deployed to edge devices with POS vs. Prediction monitoring.",
            highlight: "Implemented class-incremental learning to automate product onboarding."
        },
        assets: {
            cover: "https://placehold.co/1920x1080/111/FFF?text=ShopAssist+AI+Vis",
            video: "https://placehold.co/1920x1080/111/FFF?text=Video+Placeholder", // Will replace later
            gallery: ["https://placehold.co/800x600?text=Data+Pipeline", "https://placehold.co/800x600?text=Edge+Device"]
        }
    },
    {
        slug: "quicksku-rag",
        title: "QuickSKU",
        role: "Full Stack & RAG Architect",
        description: "Rapid product onboarding using RAG and Vector Embeddings.",
        content: {
            problem: "Training new models for every new product was too slow for edge deployment.",
            solution: "Developed an Edge-based capture app. Utilized RAG to compare vector embeddings of captured planograms against real-time detection, bypassing full retraining.",
            highlight: "Designed specific data capture protocols for complex shapes (cylindrical, face-up/down) to ensure vector integrity."
        },
        assets: {
            cover: "https://placehold.co/1920x1080/222/FFF?text=QuickSKU+Workflow",
            video: "https://placehold.co/1920x1080/222/FFF?text=RAG+Visualization",
            gallery: ["https://placehold.co/800x600?text=Vector+Embeddings", "https://placehold.co/800x600?text=User+Flow"]
        }
    },
    {
        slug: "pos-integration",
        title: "POS Backend",
        role: "Backend Architect",
        description: "Bridging AI Inference with Legacy Point-of-Sale systems.",
        content: {
            problem: "AI predictions needed to translate instantly into purchasable cart items.",
            solution: "Created a custom middleware service. Maps AI inference to database SKUs in real-time. Integrated third-party tipping, rewards redemption, and vendor terminal protocols.",
            highlight: "Seamless integration with varied legacy POS hardware."
        },
        assets: {
            cover: "https://placehold.co/1920x1080/333/FFF?text=System+Architecture",
            video: "https://placehold.co/1920x1080/333/FFF?text=Backend+Flow",
            gallery: ["https://placehold.co/800x600?text=API+Schema", "https://placehold.co/800x600?text=Database+Map"]
        }
    },
    {
        slug: "pwa-experience",
        title: "Retail PWA",
        role: "Frontend & UX Lead",
        description: "Dual-interface Progressive Web App for Cashiers and Customers.",
        content: {
            problem: "Needed a unified interface for two distinct user types (Cashier & Shopper).",
            solution: "Designed a 'Cashier Component' for overrides/RBAC management and a 'Customer Component' for self-checkout, tipping, and coupon application.",
            highlight: "Digital receipt generation via QR code at the end of the user journey."
        },
        assets: {
            cover: "https://placehold.co/1920x1080/444/FFF?text=PWA+Interface",
            video: "https://placehold.co/1920x1080/444/FFF?text=UX+Walkthrough",
            gallery: ["https://placehold.co/800x600?text=Cashier+View", "https://placehold.co/800x600?text=Customer+View"]
        }
    },
    {
        slug: "cvat-automation",
        title: "CVAT Automation",
        role: "AI Pipeline Engineer",
        description: "Automated annotation pipeline utilizing CV models and graph clustering.",
        content: {
            problem: "Manual annotation was slow and cumbersome, requiring annotators to draw boxes and map POS data individually for every image.",
            solution: "Built an auto-annotation loop using pre-trained CV models to predict bounding boxes and product labels. Implemented graph clustering to group similar looking products, allowing annotators to label massive clusters at once.",
            highlight: "Graph clustering techniques reduced annotation time by orders of magnitude compared to manual labeling."
        },
        assets: {
            cover: "https://placehold.co/1920x1080/555/FFF?text=Auto-Annotation+Pipeline",
            video: "https://placehold.co/1920x1080/555/FFF?text=Clustering+Demo",
            gallery: ["https://placehold.co/800x600?text=Graph+View", "https://placehold.co/800x600?text=Auto-Box+Overlay"]
        }
    },
    {
        slug: "model-development",
        title: "Model Scaling",
        role: "Lead Data Scientist",
        description: "Scaling computer vision capabilities from 20 to 10,000 unique products.",
        content: {
            problem: "Initial models could only handle a small SKU set (20 products). Scaling to a real-world catalog (10k+) required architectural overhaul.",
            solution: "Developed and trained robust multi-class models capable of identifying up to 10,000 SKUs. Optimized these heavy models for deployment on resource-constrained edge devices for ShopAssist.",
            highlight: "Successfully scaled recognition from 20 to 10,000 products while maintaining edge inference speeds."
        },
        assets: {
            cover: "https://placehold.co/1920x1080/666/FFF?text=10k+Product+Scale",
            video: "https://placehold.co/1920x1080/666/FFF?text=Training+Metrics",
            gallery: ["https://placehold.co/800x600?text=Confusion+Matrix", "https://placehold.co/800x600?text=Edge+Inference"]
        }
    }
];
