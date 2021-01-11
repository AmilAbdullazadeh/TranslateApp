import React, {useContext} from 'react';
import {ThemeContext} from "./context/ThemeContext";


export default function PageContent(props) {
    const {isDarkMode} = useContext(ThemeContext)
    const styles = {
        backgroundColor: isDarkMode ? "black" : "white",
        height: "100vh",
        weight: "100vw"
    };
    return (
        <div style={styles}>{props.children}</div>
    )
}