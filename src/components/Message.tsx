import { ChangeEvent, useState } from "react"

const Message = () => {
    const [message, setMessage] = useState<string>('Full-statck Developer')

    const changeOption = (e: ChangeEvent<{ value: unknown }>) => setMessage(e.target.value as string)

    return (
        <>
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