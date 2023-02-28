import { createContext, ReactNode } from "react";

interface InfoContextValue {
    name: string,
    progress: string,
    school: string,
}

const information: InfoContextValue = {
    name: 'Le Nhat Duy',
    progress: 'In Progress',
    school: 'University of Science'
}

export const InfoContext = createContext(information)

const InfoContextProvider = ({ children }: { children: ReactNode }) => {

    return (
        <InfoContext.Provider value={information}>
            {children}
        </InfoContext.Provider>
    )
}

export default InfoContextProvider