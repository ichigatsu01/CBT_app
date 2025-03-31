import React, { useContext } from 'react'
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import HeaderContext from '../../../context/HeaderContext';

const SaveBtn = ({btnStyle}) => {
  const { isSaveOpen, setIsSaveOpen, inputTitle, inputDateCreated, inputHappened,
    isSaveErrorOpen, setIsSaveErrorOpen
  } = useContext(HeaderContext);

  //タイトル、作成日、経験日が未入力ならエラーを返す
  const handleError = () => {
    if (!inputTitle.trim() || !inputDateCreated.trim() || !inputHappened.trim() ) {
      setIsSaveErrorOpen(true);
    } else {
      setIsSaveOpen(true)
    }
  }

  return (
    <Button
      variant='contained'
      sx={btnStyle}
      onClick={() => handleError()}
    >
      <SaveIcon sx={{ mr:1 }} />保存
    </Button>
  )
}

export default SaveBtn
