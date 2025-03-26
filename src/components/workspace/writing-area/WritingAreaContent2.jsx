import React, { useContext } from 'react'
import WorkSpaceContext from '../../../context/WorkSpaceContext';
import { Button, Grid2, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { Stack } from '@mui/system';

const WritingAreaContent2 = () => {
  const {writeContents, setWriteContents,
    isOpenWriteContentClearBtn, setIsOpenWriteContentClearBtn, selectSideBarIndex
  } = useContext(WorkSpaceContext);

  const addWriteContentRow = () => { //行挿入ボタン用
    setWriteContents[selectSideBarIndex](
      [...writeContents[selectSideBarIndex], {emotion:'', percent:''}
    ])
  }

  const removeWriteContentRow = (index) => { //行削除ボタン用
    // 削除ボタンを押したindex取得→newDataのfilter関数で該当indexだけ除外し、setWrite~をする
    const newData = writeContents[selectSideBarIndex].filter(
      (_, idx) => idx !== index
    )
    setWriteContents[selectSideBarIndex](newData);
  }

  // ページ内のemotion, percentの入力を把握し、更新する関数
  const handleEmotionChange = (index, value) => {
    const newData = [...writeContents[selectSideBarIndex]]
    newData[index].emotion = value
    setWriteContents[selectSideBarIndex](newData);
  }
  const handlePercentChange = (index, value) => {
    const newData = [...writeContents[selectSideBarIndex]]
    newData[index].percent = value
    setWriteContents[selectSideBarIndex](newData);
  }

  return (
    <>
        <Grid2>
          <Stack direction={'row'} sx={{justifyContent:'flex-end', marginBottom:'10px'}}>
            <Button
              onClick={()=>addWriteContentRow()}
              >行挿入</Button>
            <Button>感情例</Button>
          </Stack>
          {writeContents[selectSideBarIndex].map((data, index) => (
            <Stack direction={'row'} key={index} sx={{marginBottom:'20px', gap:'10px'} }>
              {/* 感情入力エリア */}
              <TextField
                label="感情"
                value={data.emotion}
                onChange={(e)=> handleEmotionChange(index, e.target.value)}
              />
              {/* パーセント入力エリア */}
              <OutlinedInput
                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                value={data.percent}
                onChange={(e)=> handlePercentChange(index, e.target.value)}
              />
              {/* 行ごとの削除ボタン */}
              <Button
                variant='contained'
                onClick={()=>removeWriteContentRow(index)}
                sx={{fontSize:'1rem'}}
              >削除</Button>
            </Stack>
          ))}
        </Grid2>
    </>
  )
}

export default WritingAreaContent2
