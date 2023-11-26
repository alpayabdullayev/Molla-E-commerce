import React, { useEffect } from "react";
import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
function UseDarkMode() {
    const [theme, setTheme] = useLocalStorage("Themes")

    useEffect(() => {
        document.body.classList.toggle("dark",theme)
    }, [theme])

    function changeMode() {
        document.body.classList.toggle("dark",theme)
        setTheme(!theme)
    }
    return [theme,changeMode]
}

export default UseDarkMode;
