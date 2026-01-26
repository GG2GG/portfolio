'use client';

interface MaskedProjectCardProps {
    title: string;
    category: string;
    baseImage: string;
    revealImage: string;
    className?: string; // For grid column spanning logic
}

export default function MaskedProjectCard({
    title,
    category,
    baseImage,
    revealImage,
    className = ""
}: MaskedProjectCardProps) {
    return (
        <div className={`relative group overflow-hidden border border-zinc-200 bg-gray-50 aspect-square md:aspect-auto ${className}`}>

            {/* Container for Images - Ensures aspect ratio is respected if needed, or fills container */}
            <div className="absolute inset-0 w-full h-full">
                {/* Layer 1: Base Image (Wireframe/Grayscale) - Always Visible */}
                <img
                    src={baseImage}
                    alt={`${title} wireframe`}
                    className="w-full h-full object-cover grayscale opacity-80"
                />

                {/* Layer 2: Reveal Image (Color) - Masked */}
                <div
                    className="absolute inset-0 z-10 w-full h-full transition-all duration-700 ease-[var(--cubic-default)]"
                    style={{
                        // Mask Logic
                        maskImage: 'radial-gradient(circle at center, black 50%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 100%)',
                        maskPosition: 'center',
                        WebkitMaskPosition: 'center',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        // State: Hidden by default (size 0), Revealed on hover (size 150%)
                        maskSize: '0% 0%',
                        WebkitMaskSize: '0% 0%',
                    }}
                >
                    <style jsx>{`
                .group:hover > div > div {
                    mask-size: 150% 150% !important;
                    -webkit-mask-size: 150% 150% !important;
                }
            `}</style>
                    <img
                        src={revealImage}
                        alt={`${title} final`}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-20 pointer-events-none mix-blend-difference text-white">
                <span className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2 block">
                    {category}
                </span>
                <h3 className="text-2xl font-bold">{title}</h3>
            </div>
        </div>
    );
}
