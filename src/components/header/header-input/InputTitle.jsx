import { TextField } from '@mui/material'
import React from 'react'

const InputTitle = ({inputTitleStyle}) => {
  return (
    <div>
      <TextField
        id='input-title'
        label='コラムのタイトル'
        placeholder='ここにタイトルを入力'
        variant='filled'
        color='warning'
        sx={inputTitleStyle}
      />
    </div>
  )
}

export default InputTitle
