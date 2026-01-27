'use client';

import { ViewModeProvider, useViewMode } from '@/app/context/ViewModeContext';
import AIModeView from '@/app/components/ai/AIModeView';
import AIToggle from '@/app/components/ui/AIToggle';
import Navbar from './Navbar';
import ContactModal from '../ui/ContactModal';
import GlobalProgressBar from '../ui/GlobalProgressBar';

function ViewManager({ children }: { children: React.ReactNode }) {
    const { isAIMode } = useViewMode();

    return (
        <>
            {/* Persistent UI */}
            <AIToggle />

            {/* Conditional Views */}
            {isAIMode ? (
                <AIModeView />
            ) : (
                <>
                    <Navbar />
                    <GlobalProgressBar />
                    <ContactModal />
                    {children}
                </>
            )}
        </>
    );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <ViewModeProvider>
            <ViewManager>
                {children}
            </ViewManager>
        </ViewModeProvider>
    );
}
