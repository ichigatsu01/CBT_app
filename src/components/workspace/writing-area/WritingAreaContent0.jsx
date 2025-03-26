import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useContext } from 'react'
import WorkSpaceContext from '../../../context/WorkSpaceContext'

const WritingAreaContent0 = ({ textFieldStyle }) => {
  const {writeContents, setWriteContents,
    isOpenWriteContentClearBtn, setIsOpenWriteContentClearBtn, selectSideBarIndex
  } = useContext(WorkSpaceContext);

  return (
    <Stack direction='column' sx={{height:'100%', width:'90%', marginLeft:'20px'}}>
        <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
            <Box>
            <p>入力内容をクリアしたい場合は下のボタンを押してください。<br/>テキストフィールド内は改行可能です。</p>
            </Box>
                <TextField
                multiline
                fullWidth
                variant="outlined"
                value={writeContents[selectSideBarIndex]}
                onChange={(e)=>setWriteContents[selectSideBarIndex](e.target.value)}
                sx={textFieldStyle}
                />
        </Box>
      <Button
        variant='contained'
        color='warning'
        onClick={() => setIsOpenWriteContentClearBtn(!isOpenWriteContentClearBtn)}
        sx={{
          fontSize:'1rem',
        }}
      >この項目の入力内容をクリア</Button>
    </Stack>
  )
}

export default WritingAreaContent0
