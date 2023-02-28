import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../context/ThemeContextProvider"

const Clock = () => {
    const [time, setTime] = useState<Date>(() => new Date(Date.now()))
    const { theme } = useContext(ThemeContext)
    // console.log(theme)

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date(Date.now()))
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <>
            <p className="clock" style={{ color: `${theme}` }}>{time.toUTCString()}</p>
        </>
    )
}

export default Clock