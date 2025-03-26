import React, { useContext } from 'react'
import HeaderContext from '../../../context/HeaderContext'
import { Box, Stack, SwipeableDrawer } from '@mui/material';
import SaveBtn from '../header-function/SaveBtn';
import LoadBtn from '../header-function/LoadBtn';
import ClearBtn from '../header-function/ClearBtn';
import HelpBtn from '../header-function/HelpBtn';
import InputTitle from '../header-input/InputTitle';
import InputDateCreated from '../header-input/InputDateCreated';
import InputDateHappend from '../header-input/InputDateHappend';

const HeaderHamburgerMenu = () => {
    const {isHamburgerOpen, setIsHamburgerOpen, btnStyle, inputTitleStyle, inputDateStyle, clearBtnStyle } = useContext(HeaderContext);
  return (
    <div>
        {/* {isHamburgerOpen ? 'ダブルチーズバーガーたべたい': ''} */}
        <SwipeableDrawer open={isHamburgerOpen} onClose={() => setIsHamburgerOpen(!isHamburgerOpen)}
            anchor='right'
        >
            <Box sx={{height:'100%', backgroundColor: 'var(--main-color)',}}>
                <Stack
                    spacing={'10px'}
                    sx={{margin:'10px',}}
                >
                    <InputTitle inputTitleStyle={inputTitleStyle} />
                    <InputDateCreated inputDateStyle={inputDateStyle} />
                    <InputDateHappend inputDateStyle={inputDateStyle} />
                </Stack>
                <Stack
                    spacing={'10px'}
                    sx={{margin:'10px',}}
                >
                    <SaveBtn btnStyle={btnStyle}/>
                    <LoadBtn btnStyle={btnStyle} />
                    <ClearBtn clearBtnStyle={clearBtnStyle} />
                    <HelpBtn btnStyle={btnStyle} />
                </Stack>
            </Box>
        </SwipeableDrawer>
    </div>
  )
}

export default HeaderHamburgerMenu
