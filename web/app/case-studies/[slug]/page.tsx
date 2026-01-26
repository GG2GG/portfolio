import { portfolioData } from '@/app/data/content';
import CaseStudyClient from './CaseStudyClient';

// Required for Static Export to know which pages to build
export function generateStaticParams() {
    return portfolioData.projects.map((project) => ({
        slug: project.slug,
    }));
}

// Server Component (Default)
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <CaseStudyClient slug={slug} />;
}
