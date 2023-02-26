import { useEffect, useState } from "react"

const Clock = () => {
    const [time, setTime] = useState<Date>(() => new Date(Date.now()))

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date(Date.now()))
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <>
            <p>{time.toUTCString()}</p>
        </>
    )
}

export default Clock