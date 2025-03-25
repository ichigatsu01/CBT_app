import React from 'react'
import { Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const ClearBtn = ({clearBtnStyle}) => {
  const clearExe = () => {
    console.log('clearBtnが押されました')
  }
  return (
    <Button
      variant='contained'
      color='warning'
      sx={clearBtnStyle}
      onClick={clearExe}
    >
      <ClearIcon
        sx={{ mr:1 }} />クリア
    </Button>
  )
}

export default ClearBtn
