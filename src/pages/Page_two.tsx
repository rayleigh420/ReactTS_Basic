import List from '../components/List'

const Page_two = () => {
    return (
        <>
            <List item={["Hello", "Word"]} render={(item: string) => <span>{item}</span>} />
        </>
    )
}

export default Page_two