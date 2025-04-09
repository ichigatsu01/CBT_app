import { Box, Button, IconButton, Stack, TextField } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import React, { useContext } from 'react'
import WorkSpaceContext from '../../../context/WorkSpaceContext'

const WritingAreaContent0 = ({ textFieldStyle }) => {
  const {writeContents, setWriteContents,
    isOpenWriteContentClearBtn, setIsOpenWriteContentClearBtn, selectSideBarIndex, setIsSingleHelpOpen
  } = useContext(WorkSpaceContext);

  return (
    <Stack direction='column' sx={{height:'100%', width:'90%', marginLeft:'20px'}}>
        <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
            <Box>
              <Stack
                direction='row'
                sx={{
                  justifyContent:'space-between',
                  alignItems:'center'

                }}
              >
                <h3>１：出来事</h3>
                <IconButton onClick={() => setIsSingleHelpOpen(true)}>
                  <InfoIcon sx={{fontSize:'36px'}}/>
                </IconButton>
              </Stack>
              <p style={{marginTop:'10px'}}>入力内容をクリアしたい場合は下のボタンを押してください。<br/>テキストフィールド内は改行可能です。</p>
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
