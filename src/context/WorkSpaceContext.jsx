import React, { createContext, useState } from 'react'

const WorkSpaceContext = createContext();

export const WorkSpaceProvider = ({children}) => {
    const [selectSideBarIndex, setSelectSideBarIndex] = useState(0);
    const [writeContent0, setWriteContent0] = useState("");
    const [writeContent1, setWriteContent1] = useState("");
    const [writeContent2, setWriteContent2] = useState("");
    const [writeContent3, setWriteContent3] = useState("");
    const [writeContent4, setWriteContent4] = useState("");
    const [writeContent5, setWriteContent5] = useState("");
    const [writeContent6, setWriteContent6] = useState("");
    const writeContents = [
      writeContent0,
    ];
    const setWriteContents = [
      setWriteContent0,
    ]
    const [isOpenWriteContentBtn, setIsOpenWriteContentBtn] = useState(false);

  return (
    <WorkSpaceContext.Provider
        value={{
          selectSideBarIndex, setSelectSideBarIndex, writeContents, setWriteContents,
          isOpenWriteContentBtn, setIsOpenWriteContentBtn
        }}
    >
        {children}
    </WorkSpaceContext.Provider>
  )
}

export default WorkSpaceContext
