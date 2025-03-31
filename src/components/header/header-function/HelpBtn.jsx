import React, { useContext } from 'react'
import { Button } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { HeaderContext } from '../../../context/HeaderContext';

const HelpBtn = ({btnStyle}) => {
  const {isHelpOpen, setIsHelpOpen} = useContext(HeaderContext);
  return (
    <>
      <Button
        variant='contained'
        sx={btnStyle}
        onClick={()=>setIsHelpOpen(!isHelpOpen)}
      >
        <HelpIcon sx={{ mr:1 }} />ヘルプ
      </Button>
    </>
  )
}

export default HelpBtn
