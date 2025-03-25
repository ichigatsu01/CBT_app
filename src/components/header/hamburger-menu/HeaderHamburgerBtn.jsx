import React, { useContext } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import HeaderContext from '../../../context/HeaderContext';

const HeaderHamburgerBtn = ({hambugerBtnStyle}) => {
  const {isHamburgerOpen, setIsHamburgerOpen} = useContext(HeaderContext);

  return (
    <IconButton sx={hambugerBtnStyle} onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
        <MenuIcon fontSize='large'/>
    </IconButton>
  )
}

export default HeaderHamburgerBtn
