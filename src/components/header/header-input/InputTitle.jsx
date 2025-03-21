import { TextField } from '@mui/material'
import React from 'react'

const InputTitle = () => {
  return (
    <div>
      <TextField
        id='input-title'
        label='コラムのタイトル'
        placeholder='ここにタイトルを入力'
        variant='filled'
        color='warning'
        sx={{
          bgcolor: 'white',
          borderRadius: '5px',
          width: {md:'auto', lg:'300px'},
          height: '55px',
        }}
      />
    </div>
  )
}

export default InputTitle
