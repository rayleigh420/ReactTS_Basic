import { createContext, ReactNode, useState } from "react";

interface ThemeContextValue {
    theme: 'black' | 'red',
    toggleTheme: () => void
}

// type ThemeContextValue = 'black' | 'red'

export const ThemeContext = createContext<ThemeContextValue>({
    theme: 'black',
    toggleTheme: () => { }
})

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<'black' | 'red'>('red')

    const toggleTheme = () => {
        if (theme == 'black')
            setTheme('red')
        else
            setTheme('black')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider