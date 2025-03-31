import React, { createContext, useState } from 'react'

const HeaderContext = createContext();

export function HeaderProvider({children}) {
    const [isHelpOpen, setIsHelpOpen] = useState(false); //ヘルプ開閉ボタン
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false); //ヘッダー開閉ボタン

    const btnStyle = {
        bgcolor: '#43a047',
        transition: 'all 0.5s ease',
        height: '50px',
        '&:hover': {
        bgcolor: '#2e7d32',
        }
    }
    const clearBtnStyle = {
        transition: 'all 0.5s ease',
        height: '50px',
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

    const [ isAllClearOpen, setIsAllClearOpen ] = useState(false); //ファンクションの全体クリアで使用

    const [ allContentsChecker, setAllContentsChecker ] = useState(false);
    console.log("headerContextです")

    return (
    <HeaderContext.Provider
        value={{isHelpOpen, setIsHelpOpen, isHamburgerOpen, setIsHamburgerOpen, btnStyle,
            inputTitleStyle, inputDateStyle, hambugerBtnStyle, clearBtnStyle,
            isAllClearOpen, setIsAllClearOpen,
        }}
    >
        {children}
    </HeaderContext.Provider>
    )
}

export default HeaderContext
