"use client"

import React, { createContext, useContext, useState } from 'react'



interface LangueContextType {
    language: string;
    setLanguage: (lang:string) => void;
}
const LanguageContext = createContext<LangueContextType>({
    language:'fr',
    setLanguage:()=>{}
})

export default function LanguageProvider({ children }: { children: React.ReactNode }) {

    const [language, setLanguage] =  useState('fr');
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
    )
}

export function useLanguage() {
    return useContext(LanguageContext)
}
