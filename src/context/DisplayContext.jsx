import React, { createContext, useState } from 'react'

const DisplayContext = createContext();

export function DisplayProvider({children}) {
    const [isHelpOpen, setIsHelpOpen] = useState(false);

    return (
    <DisplayContext.Provider value={{isHelpOpen, setIsHelpOpen}}>
        {children}
    </DisplayContext.Provider>
    )
}

export default DisplayContext
