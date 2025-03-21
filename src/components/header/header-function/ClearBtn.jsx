import React from 'react'
import { Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const ClearBtn = ({btnStyle}) => {
  const clearExe = () => {
    console.log('clearBtnが押されました')
  }
  return (
    <Button
      variant='contained'
      sx={btnStyle}
      onClick={clearExe}
    >
      <ClearIcon sx={{ mr:1 }} />クリア
    </Button>
  )
}

export default ClearBtn
