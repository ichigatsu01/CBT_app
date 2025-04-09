import React, { useState } from 'react'
import HeaderContext from './HeaderContext';

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

    //ファンクションボタンの開閉変数
    const [ isSaveOpen, setIsSaveOpen ] = useState(false);
    const [ isLoadOpen, setIsLoadOpen ] = useState(false);
    const [ isAllClearOpen, setIsAllClearOpen ] = useState(false);
    const [ isSaveErrorOpen, setIsSaveErrorOpen ] = useState(false); //セーブ時の必須入力項目チェック用

    //headerのタイトル、作成日、経験日の取得
    const [inputTitle, setInputTitle] = useState("");
    const [inputDateCreated, setInputDateCreated] = useState("");
    const [inputHappened, setInputHappened] = useState("");

    //!保存用データの生成 これ使ってない可能性がある
    // const [saveDataObj, setSaveDataObj] = useState({
    //     title: "",
    //     date_created: "",
    //     date_happened: "",
    //     content0: "",
    //     content1: "",
    //     content2: [{emotion:'', percent:''}],
    //     content3: "",
    //     content4: "",
    //     content5: "",
    //     content6: [{emotion:'', percent:''}],
    // })

    // ちょっと名前どうにかしたい
    // SQLを呼び出すPHPファイルをfetchする関数
    // *const [ handleLoadSQL, setHandleLoadSQL ] = useState(false); これいらないかも
    // fetchで呼び出したSQLデータを保存する
    const [ loadSQLData, setLoadSQLData ] = useState([]);
    // SQLリストで選ばれたオブジェクトを保存する
    const [ selectedItem, setSelectedItem ] = useState([]);
    // loacConfirm.jsxを呼び出す
    const [ isLoadConfirmOpen, setIsLoadConfirmOpen ] = useState(false);

    return (
    <HeaderContext.Provider
        value={{isHelpOpen, setIsHelpOpen, isHamburgerOpen, setIsHamburgerOpen, btnStyle,
            inputTitleStyle, inputDateStyle, hambugerBtnStyle, clearBtnStyle,
            isAllClearOpen, setIsAllClearOpen, isSaveOpen, setIsSaveOpen, isLoadOpen, setIsLoadOpen,
            inputTitle, setInputTitle, inputDateCreated, setInputDateCreated, inputHappened, setInputHappened,
            isSaveErrorOpen, setIsSaveErrorOpen, 
            loadSQLData, setLoadSQLData, selectedItem, setSelectedItem, isLoadConfirmOpen, setIsLoadConfirmOpen
            // saveDataObj, setSaveDataObj,
        }}
    >
        {children}
    </HeaderContext.Provider>
    )
}

export default HeaderProvider
