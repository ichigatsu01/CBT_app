import React from 'react'
import SaveBtn from './header-function/SaveBtn'
import LoadBtn from './header-function/LoadBtn'
import ClearBtn from './header-function/ClearBtn'
import HelpBtn from './header-function/HelpBtn'
import { Stack } from '@mui/material'
import InputTitle from './header-input/InputTitle'
import InputDateCreated from './header-input/InputDateCreated'
import InputDateHappend from './header-input/InputDateHappend'

const Header = () => {
  const btnStyle = {
    bgcolor: '#43a047',
    transition: 'all 0.5s ease',
    height: '50px',
    '&:hover': {
      bgcolor: '#2e7d32',
    }
  }
  const inputDateStyle = {
    bgcolor: 'white',
    borderRadius: '5px',
    height: '55px',
  }

  return (
    <header id='header'>
      <Stack //header-all
        direction={{xs:'column', lg:'row'}}
        sx={{
          justifyContent:'space-around',
          alignContent:'center',
          backgroundColor: 'var(--main-color)',
          height:{xs:'135px', lg:'70px'},
          padding:{xs:'15px 0 5px', lg:'15px 0 0'},
          paddingBottom:{xs:'5px', lg:'0'}
        }}
        >
          <Stack //input
            direction='row'
            sx={{
              width:'100%',
              justifyContent:'space-around',
            }}
            >
              <InputTitle />
              <InputDateCreated inputDateStyle={inputDateStyle} />
              <InputDateHappend inputDateStyle={inputDateStyle} />
          </Stack>
          <Stack //function
            direction='row'
            sx={{
              width:'100%',
              justifyContent:'space-around',
              paddingTop:{xs: '10px', lg: '0'}
            }}
          >
              <SaveBtn btnStyle={btnStyle}/>
              <LoadBtn btnStyle={btnStyle} />
              <ClearBtn btnStyle={btnStyle} />
              <HelpBtn btnStyle={btnStyle} />
          </Stack>
      </Stack>
    </header>
  )
}

export default Header
