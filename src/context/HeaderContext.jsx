import React, { createContext, useState } from 'react'

const HeaderContext = createContext();

function HeaderProvider({children}) {
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

    const [ isSaveOpen, setIsSaveOpen ] = useState(false);
    const [ isAllClearOpen, setIsAllClearOpen ] = useState(false); //ファンクションの全体クリアで使用

    return (
    <HeaderContext.Provider
        value={{isHelpOpen, setIsHelpOpen, isHamburgerOpen, setIsHamburgerOpen, btnStyle,
            inputTitleStyle, inputDateStyle, hambugerBtnStyle, clearBtnStyle,
            isAllClearOpen, setIsAllClearOpen, isSaveOpen, setIsSaveOpen,
        }}
    >
        {children}
    </HeaderContext.Provider>
    )
}

export { HeaderContext, HeaderProvider }