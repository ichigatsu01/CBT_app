import React, { useContext } from 'react'
import WorkSpaceContext from '../../../context/WorkSpaceContext'

//押したコンテンツによって表示するヘルプを変更することでコンポーネントを圧縮する
const WritingAreaHelp = () => {
  const { selectSideBarIndex, isSingleHelpOpen, setIsSingleHelpOpen } = useContext(WorkSpaceContext);
  return (
    WritingAreaHelp
  )
}

export default WritingAreaHelp
