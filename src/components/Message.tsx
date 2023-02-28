import { ChangeEvent, useContext, useState } from "react"
import { InfoContext } from "../context/InfoContextProvider"
import { IInfo } from "../pages/Page_one"

interface IMessageProps {
    info: IInfo
}

const Message = ({ info }: IMessageProps) => {
    const [message, setMessage] = useState<string>('Full-statck Developer')
    const information = useContext(InfoContext)

    const changeOption = (e: ChangeEvent<{ value: unknown }>) => setMessage(e.target.value as string)

    return (
        <>
            <p>Name: {info.name} - Progress: {info.progress} - School: {info.school} (use Props)</p>
            <p>Name: {information.name} - Progress: {information.progress} - School: {information.school} (useContext)</p>
            <p>{message}</p>
            <select onChange={changeOption}>
                <option>Full-stack Developer</option>
                <option>Back-end Developer</option>
                <option>Front-end Developer</option>
            </select>
        </>
    )
}

export default Message