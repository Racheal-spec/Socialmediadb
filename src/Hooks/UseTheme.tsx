import { useEffect, useState } from "react"

export const useTheme = () => {
const [theme, setTheme] = useState('light');

const setMode = (mode: any) => {
    localStorage.setItem('theme', mode);
    setTheme(mode);
}

const toggleHandler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');

}

useEffect(() => {
    const myTheme = localStorage.getItem('theme');
    myTheme && setTheme(myTheme);
})

    return [theme, toggleHandler] as const;
}