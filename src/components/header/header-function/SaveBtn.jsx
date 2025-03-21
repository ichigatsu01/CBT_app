import React from 'react'
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

const SaveBtn = ({btnStyle}) => {
  const saveExe = () => {
    console.log('saveBtnが押されました')
  }
  return (
    <Button
      variant='contained'
      sx={btnStyle}
      onClick={saveExe}
    >
      <SaveIcon sx={{ mr:1 }} />保存
    </Button>
  )
}

export default SaveBtn
