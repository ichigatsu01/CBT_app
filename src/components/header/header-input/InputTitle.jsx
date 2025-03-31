import { TextField } from '@mui/material'
import React, { useContext } from 'react'
import HeaderContext from '../../../context/HeaderContext'

const InputTitle = ({inputTitleStyle}) => {
  const { setInputTitle } = useContext(HeaderContext);
  // console.log(inputTitle)
  return (
    <div>
      <TextField
        id='input-title'
        label='コラムのタイトル'
        placeholder='ここにタイトルを入力'
        variant='filled'
        color='warning'
        sx={inputTitleStyle}
        onChange={(e) => setInputTitle(e.target.value)}
      />
    </div>
  )
}

export default InputTitle
