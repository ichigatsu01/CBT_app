import React, { useContext } from 'react'
import HeaderContext from '../../../context/HeaderContext'
import { Box, Button, Stack, SwipeableDrawer } from '@mui/material';
import SaveBtn from '../header-function/SaveBtn';
import LoadBtn from '../header-function/LoadBtn';
import ClearBtn from '../header-function/ClearBtn';
import CloseIcon from '@mui/icons-material/Close';
import InputTitle from '../header-input/InputTitle';
import InputDateCreated from '../header-input/InputDateCreated';
import InputDateHappend from '../header-input/InputDateHappened';

const HeaderHamburgerMenu = () => {
    const {isHamburgerOpen, setIsHamburgerOpen, btnStyle, inputTitleStyle, inputDateStyle, clearBtnStyle, } = useContext(HeaderContext);
  return (
    <div>
        <SwipeableDrawer open={isHamburgerOpen} onClose={() => setIsHamburgerOpen(false)}
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
                    {/* <HelpBtn btnStyle={btnStyle} /> */}
                    <Button
                        variant='contained'
                        onClick={() => setIsHamburgerOpen(false)}
                        sx={{height: '50px', }}
                    >
                        <CloseIcon
                            sx={{ mr:1 }} />閉じる
                    </Button>
                </Stack>
            </Box>
        </SwipeableDrawer>
    </div>
  )
}

export default HeaderHamburgerMenu
