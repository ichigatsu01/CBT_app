import { TextField } from '@mui/material'
import React, { useContext } from 'react'
import HeaderContext from '../../../context/HeaderContext'

const InputDateCreated = ({inputDateStyle}) => {
  const { setInputDateCreated } = useContext(HeaderContext);
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
        onChange={(e) => setInputDateCreated(e.target.value)}
    />
  )
}

export default InputDateCreated
