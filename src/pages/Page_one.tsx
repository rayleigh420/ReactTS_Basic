import { useState } from "react"
import Clock from "../components/Clock"
import Message from "../components/Message"

export type IInfo = {
    name: string,
    progress: string,
    school: string,
}

const Page_one = () => {
    // const info: IInfo = {
    //     name: 'Le Nhat Duy',
    //     progress: 'In Progress',
    //     school: 'University of Science'
    // }
    const name: string = "Le Nhat Duy"

    return (
        <>
            <Clock />
            <Message name={name} />
        </>
    )
}

export default Page_one