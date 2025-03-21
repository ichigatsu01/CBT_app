import React, { useContext } from 'react'
import { Button } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import HelpText from './HelpText';
import DisplayContext from '../../../context/DisplayContext';

const HelpBtn = ({btnStyle}) => {
  const {isHelpOpen, setIsHelpOpen} = useContext(DisplayContext);
  return (
    <>
      <Button
        variant='contained'
        sx={btnStyle}
        onClick={()=>setIsHelpOpen(!isHelpOpen)}
      >
        <HelpIcon sx={{ mr:1 }} />ヘルプ
      </Button>
      {/* {isHelpOpen ? <HelpText /> : ""} */}
    </>
  )
}

export default HelpBtn
