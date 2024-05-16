import React, { createContext, useState } from "react";

interface ContextProps {
    protanopia: boolean;
    toggleProt: () => void;
}

export const ColorBlindContext = createContext<ContextProps | undefined>(undefined);

interface Props {
    children: React.ReactNode;
}

export const ColorBlindProvider: React.FC<Props> = ({ children }) => {
    const [protanopia, setProtanopia] = useState(false);

    const toggleProt = () => {
        setProtanopia(prevState => !prevState);
    };
    
    return (
        <ColorBlindContext.Provider value={{ protanopia, toggleProt }}>
            {children}
        </ColorBlindContext.Provider>
    );
};