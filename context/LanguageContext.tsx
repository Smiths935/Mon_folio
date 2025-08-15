"use client"

import React, { createContext, useContext, useState } from 'react'

// type Langue = 'fr' | 'en';

// interface LangueContextType {
//     langue: Langue;
//     toggleLangue: () => void;
// }
const LanguageContext = createContext()

export default function LanguageProvider({ children }: { children: React.ReactNode }) {

    const [langue, setLanguage] =  useState('en');

    const changeLanguage = (lang:string) => {
        setLanguage(lang)
    }

    return (
        <LanguageContext.Provider value={{ langue, changeLanguage }}>{children}</LanguageContext.Provider>
    )
}

export function useLanguage() {
    return useContext(LanguageContext)
}
