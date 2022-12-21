import { createContext, useState } from "react";

const LayoutContext = createContext({})

export const LayoutProvider = ({children}) => {
    const [lay, setLay] = useState(true)
    return (<LayoutContext.Provider value={{lay, setLay}}>
        {children}
    </LayoutContext.Provider>)
}

export default LayoutContext