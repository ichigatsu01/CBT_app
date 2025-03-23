import React, { createContext, useState } from 'react'

const DisplayContext = createContext();

export function DisplayProvider({children}) {
    const [isHelpOpen, setIsHelpOpen] = useState(false); //ヘルプ開閉ボタン
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false); //ヘッダー開閉ボタン
    const [selectSideBarIndex, setSelectSideBarIndex] = useState(0);
    const btnStyle = {
        bgcolor: '#43a047',
        transition: 'all 0.5s ease',
        height: '50px',
        '&:hover': {
        bgcolor: '#2e7d32',
        }
    }
    const inputTitleStyle = {
        bgcolor: 'white',
        borderRadius: '5px',
        height: '55px',
    }
    const inputDateStyle = {
        bgcolor: 'white',
        borderRadius: '5px',
        height: '55px',
    }
    const hambugerBtnStyle = {
        color:'white',
        borderRadius: '5px',
        height: '50px',
    }

    return (
    <DisplayContext.Provider
        value={{isHelpOpen, setIsHelpOpen, isHamburgerOpen, setIsHamburgerOpen, btnStyle,
            inputTitleStyle, inputDateStyle, hambugerBtnStyle, selectSideBarIndex, setSelectSideBarIndex
        }}
    >
        {children}
    </DisplayContext.Provider>
    )
}

export default DisplayContext
