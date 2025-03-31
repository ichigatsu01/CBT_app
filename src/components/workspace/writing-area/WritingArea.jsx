import { Stack } from '@mui/material'
import React, { useContext } from 'react'
import WritingAreaContent0 from './WritingAreaContent0'
import WritingAreaContent1 from './WritingAreaContent1'
import WritingAreaContent2 from './WritingAreaContent2'
import WritingAreaContent3 from './WritingAreaContent3'
import WritingAreaContent4 from './WritingAreaContent4'
import WritingAreaContent5 from './WritingAreaContent5'
import WritingAreaContent6 from './WritingAreaContent6'
import WorkSpaceContext from '../../../context/WorkSpaceContext';

const WritingArea = () => {
  const {selectSideBarIndex, setSelectSideBarIndex} = useContext(WorkSpaceContext);
  const textFieldStyle = {
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
  }
  const writingAreaLists = {
    0: <WritingAreaContent0 textFieldStyle={textFieldStyle}/>,
    1: <WritingAreaContent1 textFieldStyle={textFieldStyle} />,
    2: <WritingAreaContent2 textFieldStyle={textFieldStyle} />,
    3: <WritingAreaContent3 textFieldStyle={textFieldStyle} />,
    4: <WritingAreaContent4 textFieldStyle={textFieldStyle} />,
    5: <WritingAreaContent5 textFieldStyle={textFieldStyle} />,
    6: <WritingAreaContent6 textFieldStyle={textFieldStyle} />,
  }

  return (
    <Stack
      direction='column'
      sx={{
        height:'100%',
        width:{xs:'90%', md:'90%'},
        mx:{xs:'auto', md:'0'}
      }}
    >
      {writingAreaLists[selectSideBarIndex]}
    </Stack>
  )
}

export default WritingArea
