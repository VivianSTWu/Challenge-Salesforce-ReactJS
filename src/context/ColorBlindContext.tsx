import { createContext, useState } from "react";

export const ColorBlindContext = createContext();

export const ColorBlindProvider = ({children}) => {
    const [protanopia, setProtanopia] = useState(false)

    const toggleProt = () => {
        setProtanopia(protanopia === false ? true : false)
    }
    
    return(
        <ColorBlindContext.Provider value={{protanopia, toggleProt}}>{children}</ColorBlindContext.Provider>
    )
}