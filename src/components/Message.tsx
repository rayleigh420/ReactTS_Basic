import { ChangeEvent, useState } from "react"
import { IInfo } from "../pages/Page_one"

const Message = ({ name }: { name: string }) => {
    const [message, setMessage] = useState<string>('Full-statck Developer')

    const changeOption = (e: ChangeEvent<{ value: unknown }>) => setMessage(e.target.value as string)

    return (
        <>
            <p>Name: {name}</p>
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