import React, { useContext } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import DisplayContext from '../../../context/DisplayContext';

const HeaderHamburgerBtn = ({hambugerBtnStyle}) => {
  const {isHamburgerOpen, setIsHamburgerOpen} = useContext(DisplayContext);

  return (
    <IconButton sx={hambugerBtnStyle} onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
        <MenuIcon fontSize='large'/>
    </IconButton>
  )
}

export default HeaderHamburgerBtn
