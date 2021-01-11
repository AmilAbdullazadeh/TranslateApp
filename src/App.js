import React from 'react';
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
import {ThemeProvider} from "./context/ThemeContext";
import {LanguageProvider} from "./context/LanguageContext";


export default function App() {
    return (
        <div>
            <ThemeProvider>
                <LanguageProvider>
                    <PageContent>
                        <Navbar/>
                        <Form/>
                    </PageContent>
                </LanguageProvider>
            </ThemeProvider>
        </div>
    )
}
