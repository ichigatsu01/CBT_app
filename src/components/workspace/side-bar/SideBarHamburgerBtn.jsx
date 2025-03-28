import React, { useContext } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import HeaderContext from '../../../context/HeaderContext';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import WorkSpaceContext from '../../../context/WorkSpaceContext';

const SideBarHamburgerBtn = ({hambugerBtnStyle}) => {
    const {isSideBarOpen, setIsSideBarOpen} = useContext(WorkSpaceContext);

    return (
    <IconButton sx={hambugerBtnStyle} onClick={() => {
        setIsSideBarOpen(!isSideBarOpen)
        console.log('sidebar open!')
        }}>
        <FormatListNumberedIcon fontSize='large'/>
    </IconButton>
)
}

export default SideBarHamburgerBtn
