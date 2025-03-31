import React, { useContext } from 'react'
import SaveBtn from './header-function/SaveBtn'
import LoadBtn from './header-function/LoadBtn'
import ClearBtn from './header-function/ClearBtn'
import HelpBtn from './header-function/HelpBtn'
import { IconButton, Stack } from '@mui/material'
import InputTitle from './header-input/InputTitle'
import InputDateCreated from './header-input/InputDateCreated'
import InputDateHappened from './header-input/InputDateHappened'
import HeaderHamburgerBtn from './hamburger-menu/HeaderHamburgerBtn'
import HeaderContext from '../../context/HeaderContext'
import SideBarHamburgerBtn from '../workspace/side-bar/SideBarHamburgerBtn'
import HelpIcon from '@mui/icons-material/Help';

const Header = () => {
  const {btnStyle, inputTitleStyle, inputDateStyle, hambugerBtnStyle, clearBtnStyle,
    isHelpOpen, setIsHelpOpen
  } = useContext(HeaderContext);

  return (
    <header id='header'>
      <Stack //header-all
        direction={{xs:'column', md:'row'}}
        sx={{
          justifyContent:'space-around',
          alignItems:'center',
          backgroundColor: 'var(--main-color)',
          height:{xs:'50px', md:'70px'},
          width:'100%',
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
              <InputDateHappened inputDateStyle={inputDateStyle} />
          </Stack>
          <Stack //function
            direction='row'
            sx={{
              width:'100%',
              justifyContent:'space-around',
              display:{xs:'none', md:'flex'},
            }}
          >
              <SaveBtn btnStyle={btnStyle}/>
              <LoadBtn btnStyle={btnStyle} />
              <ClearBtn btnStyle={clearBtnStyle} />
              <HelpBtn btnStyle={btnStyle} />
          </Stack>
          <Stack //hamburgerMenu...md未満の画面サイズで表示
            direction={'row'}
            sx={{
              display:{xs:'flex', md:'none'},
              width:'100%',
              justifyContent:'space-around',
              // gap:'70px'
            }}
          >
            <SideBarHamburgerBtn hambugerBtnStyle={hambugerBtnStyle} />
            <IconButton
              aria-label='help'
              onClick={()=>setIsHelpOpen(!isHelpOpen)}
              sx={{
                color:'white',
              }}
            >
              <HelpIcon sx={{fontSize:30}}/>
            </IconButton>
            <HeaderHamburgerBtn hambugerBtnStyle={hambugerBtnStyle} />
          </Stack>
      </Stack>
    </header>
  )
}

export default Header
