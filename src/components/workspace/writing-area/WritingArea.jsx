import { Box, Button, Stack, TextField } from '@mui/material'
import React from 'react'

const WritingArea = () => {
  return (
    <Stack direction='column' sx={{height:'100%', width:'90%', marginLeft:'20px'}}>
      <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <Box>
          <p>テキストフィールド内は改行可能です。<br/>入力内容をクリアしたい場合は下のボタンを押してください。</p>
        </Box>
        <TextField
          multiline
          fullWidth
          variant="outlined"
          sx={{
            backgroundColor:'white',
            height:'90%',
            '& .MuiOutlinedInput-root': {
              flex: 1,
              height: '90%',
              display: 'flex',
              flexDirection: 'column',
            },
            '& .MuiOutlinedInput-input': {
              flex: 1,
              height: '90%',
              overflowY: 'auto',
            },
          }}
        />
      </Box>
      <Button variant='filled' sx={{fontSize:'1rem'}}>この項目の入力内容をクリア</Button>
    </Stack>
  )
}

export default WritingArea
