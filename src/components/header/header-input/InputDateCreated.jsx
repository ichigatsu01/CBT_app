import { TextField } from '@mui/material'
import React from 'react'

const InputDateCreated = ({inputDateStyle}) => {
  return (
    <TextField
        label='作成日'
        type='date'
        variant='filled'
        color='warning'
        slotProps={{
            inputLabel: {shrink: true}
        }}
        sx={inputDateStyle}
    />
  )
}

export default InputDateCreated
