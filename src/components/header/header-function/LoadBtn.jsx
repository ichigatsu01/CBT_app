import React from 'react'
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const LoadBtn = ({btnStyle}) => {
  const loadExe = () => {
    console.log('loadBtnが押されました')
  }
  return (
    <Button
      variant='contained'
      sx={btnStyle}
      onClick={loadExe}
    >
      <DownloadIcon sx={{ mr:1 }} />読込
    </Button>
  )
}

export default LoadBtn
