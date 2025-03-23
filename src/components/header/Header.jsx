import React, { useContext } from 'react'
import SaveBtn from './header-function/SaveBtn'
import LoadBtn from './header-function/LoadBtn'
import ClearBtn from './header-function/ClearBtn'
import HelpBtn from './header-function/HelpBtn'
import { Stack } from '@mui/material'
import InputTitle from './header-input/InputTitle'
import InputDateCreated from './header-input/InputDateCreated'
import InputDateHappend from './header-input/InputDateHappend'
import HeaderHamburgerBtn from './hamburger-menu/HeaderHamburgerBtn'
import DisplayContext from '../../context/DisplayContext'

const Header = () => {
  const {btnStyle, inputTitleStyle, inputDateStyle, hambugerBtnStyle} = useContext(DisplayContext);

  return (
    <header id='header'>
      <Stack //header-all
        direction={{xs:'column', md:'row'}}
        sx={{
          justifyContent:'space-around',
          alignItems:'center',
          backgroundColor: 'var(--main-color)',
          height:{xs:'50px', md:'70px'},
          padding:'10px 0',
        }}
        >
          <Stack //input
            direction='row'
            sx={{
              width:'100%',
              justifyContent:'space-around',
              gap:'5px',
              display:{xs:'none', md:'flex'},
            }}
            >
              <InputTitle inputTitleStyle={inputTitleStyle}/>
              <InputDateCreated inputDateStyle={inputDateStyle} />
              <InputDateHappend inputDateStyle={inputDateStyle} />
          </Stack>
          <Stack //function
            direction='row'
            sx={{
              width:'100%',
              justifyContent:'space-around',
              display:{xs:'none', md:'flex'},
              // paddingTop:{xs: '10px', md: '0'}
            }}
          >
              <SaveBtn btnStyle={btnStyle}/>
              <LoadBtn btnStyle={btnStyle} />
              <ClearBtn btnStyle={btnStyle} />
              <HelpBtn btnStyle={btnStyle} />
          </Stack>
          <Stack //hamburgerMenu...md未満の画面サイズで表示
            sx={{
              display:{xs:'flex', md:'none'},
            }}
          >
            <HeaderHamburgerBtn hambugerBtnStyle={hambugerBtnStyle} />
          </Stack>
      </Stack>
    </header>
  )
}

export default Header
