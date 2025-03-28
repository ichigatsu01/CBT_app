import React, { useContext } from 'react'
import WorkSpaceContext from '../../../context/WorkSpaceContext';
import { Button, Grid2, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';

const WritingAreaContent2 = () => {
  const {writeContents, setWriteContents,
    selectSideBarIndex, isOpenEmotionExample, setIsOpenEmotionExample,
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
        <Grid2 sx={{width:'100%', justifyContent:'center'}}>
          <p>感情欄は「感情の例」ボタンから選択することも可能です。</p>
          <Stack //*行挿入、感情の例ボタン
            direction={'row'} sx={{
              height:'50px', width:'80%', justifyContent:'space-around', marginBottom:'20px', gap:'10px',
              marginLeft:'auto', marginRight:'auto',
            }}>
            <Button
              variant='contained'
              onClick={()=>addWriteContentRow()}
              >行挿入</Button>
            <Button
              variant='contained'
              onClick={()=>setIsOpenEmotionExample(!isOpenEmotionExample)}
            >
              感情の例
            </Button>
          </Stack>
          <Grid2 container spacing={{xs:1, md:2}}>
            {writeContents[selectSideBarIndex].map((data, index) => (
              <Grid2 size={{xs:12,md:6}} key={index}>
                <Stack //*感情、パーセント入力エリア
                  direction={'row'}
                  useFlexGap
                  spacing={{xs:1, md:2}}
                  sx={{
                    alignItems:'center',
                  }}>
                  <TextField
                    label="感情"
                    sx={{width:'200px'}}
                    value={data.emotion}
                    onChange={(e)=> handleEmotionChange(index, e.target.value)}
                  />
                  <OutlinedInput
                    inputMode='numeric'
                    inputProps={{
                      inputMode: 'numeric',
                      pattern: '[0-9]*'
                    }}
                    endAdornment={<InputAdornment position="end">%</InputAdornment>}
                    sx={{width:'100px'}}
                    value={data.percent}
                    onChange={(e)=> handlePercentChange(index, e.target.value)}
                  />
                  {/* 行ごとの削除ボタン */}
                  <Stack //*画面サイズxs:アイコンのみ
                  sx={{
                    display:{xs:'flex', md:'none'},
                  }}>
                    <IconButton
                      onClick={()=>removeWriteContentRow(index)}
                    >
                      <DeleteIcon fontSize='large'/>
                    </IconButton>
                  </Stack>
                  <Stack //*画面サイズmd以上：テキスト付ボタン
                  sx={{
                    display:{xs:'none', md:'flex'},
                  }}>
                    <Button
                      variant='contained'
                      color='warning'
                      onClick={()=>removeWriteContentRow(index)}
                      sx={{height:'50px'}}
                    >削除</Button>
                  </Stack>
                </Stack>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
    </>
  )
}

export default WritingAreaContent2
