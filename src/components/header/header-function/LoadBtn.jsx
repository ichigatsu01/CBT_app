import React, { useContext } from 'react'
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import HeaderContext from '../../../context/HeaderContext';
import { fetchPHPfile } from './fetchPHPfile';

const LoadBtn = ({btnStyle}) => {
  const { setIsLoadOpen, setLoadSQLData, isHamburgerOpen, setIsHamburgerOpen } = useContext(HeaderContext);
  return (
    <Button
      variant='contained'
      sx={btnStyle}
      onClick={() => {
        fetchPHPfile(setLoadSQLData)
        setIsLoadOpen(true)
        setIsHamburgerOpen(false) // レスポンシブ対応の時にハンバーガーメニューをひっこめる
      }}
    >
      <DownloadIcon sx={{ mr:1 }} />読込
    </Button>
  )
}

export default LoadBtn
