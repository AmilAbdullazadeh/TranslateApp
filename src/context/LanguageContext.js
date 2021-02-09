import React, {useState, createContext, Component} from 'react';

export const LanguageContext = createContext()

export function LanguageProvider(props) {
    const [language, setLanguage] = useState('azerbaijan')

    const changeLanguage = (e) => {
        setLanguage(e.target.value)
    }

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    );
}