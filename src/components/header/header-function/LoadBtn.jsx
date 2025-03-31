import React, { useContext } from 'react'
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import HeaderContext from '../../../context/HeaderContext';

const LoadBtn = ({btnStyle}) => {
  const { isLoadOpen, setIsLoadOpen } = useContext(HeaderContext);
  return (
    <Button
      variant='contained'
      sx={btnStyle}
      onClick={() => setIsLoadOpen(!isLoadOpen)}
    >
      <DownloadIcon sx={{ mr:1 }} />読込
    </Button>
  )
}

export default LoadBtn
