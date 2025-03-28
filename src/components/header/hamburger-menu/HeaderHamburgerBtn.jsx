import React, { useContext } from 'react'
import WidgetsIcon from '@mui/icons-material/Widgets';
import { IconButton } from '@mui/material';
import HeaderContext from '../../../context/HeaderContext';

const HeaderHamburgerBtn = ({hambugerBtnStyle}) => {
  const {isHamburgerOpen, setIsHamburgerOpen} = useContext(HeaderContext);

  return (
    <IconButton sx={hambugerBtnStyle} onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
        <WidgetsIcon fontSize='large'/>
    </IconButton>
  )
}

export default HeaderHamburgerBtn
