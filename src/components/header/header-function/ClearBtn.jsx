import React, { useContext } from 'react'
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { HeaderContext } from '../../../context/HeaderContext';

const ClearBtn = ({clearBtnStyle}) => {
  const { isAllClearOpen, setIsAllClearOpen } = useContext(HeaderContext);
  return (
    <Button
      variant='contained'
      color='warning'
      sx={clearBtnStyle}
      onClick={()=>setIsAllClearOpen(!isAllClearOpen)}
    >
      <DeleteIcon
        sx={{ mr:1 }} />クリア
    </Button>
  )
}

export default ClearBtn
