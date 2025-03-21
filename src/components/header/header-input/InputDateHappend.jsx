import { TextField } from '@mui/material'
import React from 'react'

const InputDateHappend = ({inputDateStyle}) => {
  return (
    <TextField
        label='経験日'
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

export default InputDateHappend
