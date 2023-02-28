import { useContext } from "react"
import Clock from "../components/Clock"
import Message from "../components/Message"
import { ThemeContext } from "../context/ThemeContextProvider"

export type IInfo = {
    name: string,
    progress: string,
    school: string,
}

const Page_one = () => {
    const info: IInfo = {
        name: 'Le Nhat Duy',
        progress: 'In Progress',
        school: 'University of Science'
    }

    const { toggleTheme } = useContext(ThemeContext)

    const changeTheme = () => {
        toggleTheme()
    }


    return (
        <>
            <Clock />
            <Message info={info} />
            <button onClick={changeTheme}>Toggle Theme</button>
        </>
    )
}

export default Page_one