'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ViewModeContextType {
    isAIMode: boolean;
    toggleMode: () => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export function ViewModeProvider({ children }: { children: ReactNode }) {
    const [isAIMode, setIsAIMode] = useState(false);

    const toggleMode = () => {
        setIsAIMode((prev) => !prev);
    };

    return (
        <ViewModeContext.Provider value={{ isAIMode, toggleMode }}>
            {children}
        </ViewModeContext.Provider>
    );
}

export function useViewMode() {
    const context = useContext(ViewModeContext);
    if (context === undefined) {
        throw new Error('useViewMode must be used within a ViewModeProvider');
    }
    return context;
}
