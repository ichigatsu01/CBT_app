// WritingAriaの各コンテンツ内のヘルプボタンに対して反応させる
import { Dialog, DialogTitle } from '@mui/material'
import React, { useContext } from 'react'
import WorkSpaceContext from '../../../context/WorkSpaceContext'
import SingleHelp0 from './single-help/SingleHelp0';
import SingleHelp1 from './single-help/SingleHelp1';
import SingleHelp2 from './single-help/SingleHelp2';
import SingleHelp3 from './single-help/SingleHelp3';
import SingleHelp4 from './single-help/SingleHelp4';
import SingleHelp5 from './single-help/SingleHelp5';
import SingleHelp6 from './single-help/SingleHelp6';

const SingleHelps = () => {
    const { isSingleHelpOpen, setIsSingleHelpOpen, selectSideBarIndex } = useContext(WorkSpaceContext);
    return (
    <>
        {selectSideBarIndex === 0 && <SingleHelp0 /> }
        {selectSideBarIndex === 1 && <SingleHelp1 /> }
        {selectSideBarIndex === 2 && <SingleHelp2 /> }
        {selectSideBarIndex === 3 && <SingleHelp3 /> }
        {selectSideBarIndex === 4 && <SingleHelp4 /> }
        {selectSideBarIndex === 5 && <SingleHelp5 /> }
        {selectSideBarIndex === 6 && <SingleHelp6 /> }
    </>
    )
}

export default SingleHelps
