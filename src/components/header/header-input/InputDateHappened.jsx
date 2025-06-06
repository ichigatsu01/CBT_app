import { TextField } from '@mui/material'
import React, { useContext } from 'react'
import HeaderContext from '../../../context/HeaderContext'

const InputDateHappened = ({inputDateStyle}) => {
  const { inputHappened, setInputHappened } = useContext(HeaderContext);
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
        value={inputHappened}
        onChange={(e) => setInputHappened(e.target.value)}
    />
  )
}

export default InputDateHappened