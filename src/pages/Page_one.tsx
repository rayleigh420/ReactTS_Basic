import Clock from "../components/Clock"
import Message from "../components/Message"

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

    return (
        <>
            <Clock />
            <Message info={info} />
        </>
    )
}

export default Page_one