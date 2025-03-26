import React, { createContext, useState } from 'react'

const WorkSpaceContext = createContext();

export const WorkSpaceProvider = ({children}) => {
    //content2, content6は感情と割合を入力するため他のcontentと仕様を変えている
    const [selectSideBarIndex, setSelectSideBarIndex] = useState(0);
    const [writeContent0, setWriteContent0] = useState("");
    const [writeContent1, setWriteContent1] = useState("");
    const [writeContent2, setWriteContent2] = useState([{emotion:'', percent:''}]);
    const [writeContent3, setWriteContent3] = useState("");
    const [writeContent4, setWriteContent4] = useState("");
    const [writeContent5, setWriteContent5] = useState("");
    const [writeContent6, setWriteContent6] = useState([{emotion:'', percent:''}]);
    const writeContents = [
      writeContent0, writeContent1, writeContent2, writeContent3, writeContent4, writeContent5, writeContent6,
    ];
    const setWriteContents = [
      setWriteContent0, setWriteContent1, setWriteContent2, setWriteContent3,
      setWriteContent4, setWriteContent5, setWriteContent6,
    ]
    const [isOpenWriteContentClearBtn, setIsOpenWriteContentClearBtn] = useState(false);
  return (
    <WorkSpaceContext.Provider
        value={{
          selectSideBarIndex, setSelectSideBarIndex, writeContents, setWriteContents,
          isOpenWriteContentClearBtn, setIsOpenWriteContentClearBtn
        }}
    >
        {children}
    </WorkSpaceContext.Provider>
  )
}

export default WorkSpaceContext
