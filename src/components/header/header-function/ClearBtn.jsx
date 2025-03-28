import React from 'react'
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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
      <DeleteIcon
        sx={{ mr:1 }} />クリア
    </Button>
  )
}

export default ClearBtn
