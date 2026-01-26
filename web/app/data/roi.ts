export const roiContent = {
    title: "What I Can Do For Your Business",
    subtitle: "I build AI-powered systems that reduce cost, save time, increase conversion, and automate operations — fast.",
    supporting: "Idea → MVP → Production Workflows: I ship systems that deliver measurable ROI.",

    metrics: [
        { label: "Cut operational effort by", value: "50–80%", suffix: "by automating workflows" },
        { label: "Ship MVPs in", value: "Days", suffix: "not months" },
        { label: "Improve decision-making", value: "x3", suffix: "via analytics" }, // formatting adjusted for visual impact
        { label: "Turn manual processes into", value: "Scalable Systems", suffix: "fully autonomous" },
        { label: "Reduce human errors", value: "99%", suffix: "with validation" }
    ],

    capabilities: [
        {
            id: 1,
            title: "AI Workflow Automation (Agentic Operations)",
            problem: "Teams waste time doing repetitive work manually.",
            build: "End-to-end AI workflows that plan, execute, validate, and log results (n8n + agents + tools).",
            roi: "Saves hours per week, reduces ops cost, improves speed + reliability.",
            tools: ["n8n", "AI Agents", "API integrations", "retries", "monitoring"]
        },
        {
            id: 2,
            title: "Job / Lead / Candidate Funnel Automation",
            problem: "Pipelines are noisy. Decisions are slow and inconsistent.",
            build: "Scoring systems (fit scoring / lead scoring) + tracking dashboards using structured evaluation.",
            roi: "Better-quality pipeline, faster decisions, less wastage, higher conversion.",
            tools: ["Supabase/Postgres", "LLM scoring rubrics", "automation workflows"]
        },
        {
            id: 3,
            title: "AI Content Engine for Growth",
            problem: "Consistent high-quality content + engagement is hard to scale.",
            build: "AI content pipelines that generate posts, variations, hooks, memes, and comment strategies.",
            roi: "More inbound leads, stronger brand, faster growth loops.",
            tools: ["Agentic posting workflows", "vector database", "content scoring"]
        },
        {
            id: 4,
            title: "Data Collection + Enrichment Systems",
            problem: "Data is scattered, messy, and hard to use.",
            build: "Automated data pipelines that collect, clean, enrich, and store structured datasets.",
            roi: "Faster analytics, better insights, reduced manual tracking, better reporting.",
            tools: ["Scraping pipelines", "API enrichment", "structured DB storage"]
        },
        {
            id: 5,
            title: "Computer Vision Intelligence Systems",
            problem: "Businesses need insights from video feeds in real time.",
            build: "Real-time detection + tracking systems (persistent IDs), analytics export, and event-based triggers.",
            roi: "Operational insights, automation opportunities, performance measurement.",
            tools: ["YOLO", "DeepSORT/ByteTrack", "trajectory analytics", "DB exports"]
        },
        {
            id: 6,
            title: "High-Speed Checkout / POS Product Systems",
            problem: "Checkout speed and reliability directly affects revenue.",
            build: "POS + catalog + payments + loyalty experience systems with admin controls.",
            roi: "Faster checkout → higher throughput → increased revenue.",
            tools: ["Product workflows", "payments", "loyalty logic", "UI + backend"]
        }
    ],

    process: [
        {
            step: "01",
            title: "Strategic Discovery",
            desc: "I quantify value first. I analyze your P&L to identify bottlenecks and define clear ROI metrics before thinking about product definition.",
            icon: "compass",
            color: "#ccff00" // Neon Yellow
        },
        {
            step: "02",
            title: "UX & Touchpoints",
            desc: "Great AI is invisible. I map the customer journey to find friction points where intelligence can seamlessly intervene without overwhelming users.",
            icon: "users",
            color: "#06b6d4" // Cyan
        },
        {
            step: "03",
            title: "AI System Architecture",
            desc: "Scalability is built in. I design robust schemas and agentic decision logic to ensure the system is reliable, secure, and ready for growth.",
            icon: "cpu",
            color: "#a855f7" // Purple
        },
        {
            step: "04",
            title: "Rapid MVP Execution",
            desc: "Speed is a feature. I deploy functional prototypes in days, prioritizing core utility to validate business impact immediately.",
            icon: "rocket",
            color: "#f59e0b" // Amber
        },
        {
            step: "05",
            title: "Validation Loops",
            desc: "Usage is the only truth. I implement rigorous analytics to measure adoption and pivot instantly if a feature doesn't drive revenue.",
            icon: "activity",
            color: "#ef4444" // Red
        },
        {
            step: "06",
            title: "Production Scale",
            desc: "From demo to business-critical. I implement logging, error handling, and monitoring to ensure 99.9% uptime at scale.",
            icon: "shield",
            color: "#10b981" // Emerald
        }
    ],

    checklist: [
        "Automated workflows with logs + retries",
        "Structured database + dashboards",
        "Scoring models (fit / lead / decision support)",
        "Integrations with tools, APIs, internal systems",
        "Production-ready UX and fast iteration support"
    ]
};
