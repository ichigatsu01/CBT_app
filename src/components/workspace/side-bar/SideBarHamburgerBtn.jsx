import React, { useContext } from 'react'
import { IconButton } from '@mui/material';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import WorkSpaceContext from '../../../context/WorkSpaceContext';

const SideBarHamburgerBtn = ({hambugerBtnStyle}) => {
    const {isSideBarOpen, setIsSideBarOpen} = useContext(WorkSpaceContext);

    return (
    <IconButton sx={hambugerBtnStyle} onClick={() => {
        setIsSideBarOpen(!isSideBarOpen)
        }}>
        <FormatListNumberedIcon fontSize='large'/>
    </IconButton>
)
}

export default SideBarHamburgerBtn
