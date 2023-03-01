import { ReactNode } from "react"

interface ListProps<T> {
    item: T[],
    render: (item: T) => ReactNode
}

const List = <T extends {}>({ item, render }: ListProps<T>) => {
    return (
        <ul>
            {item.map((it, index) => (
                <li key={index}>{render(it)}</li>
            ))}
        </ul>
    )
}

export default List