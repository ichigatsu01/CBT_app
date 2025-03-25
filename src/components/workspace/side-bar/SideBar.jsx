import { Button, List, Stack } from '@mui/material'
import React, { useContext } from 'react'
import WorkSpaceContext from '../../../context/WorkSpaceContext';

const SideBar = () => {
  const {selectSideBarIndex, setSelectSideBarIndex} = useContext(WorkSpaceContext);
  const sideBarLists = [
    "1.出来事", "2.自動思考", "3.当時の感情", "4.根拠", "5.反証", "6.適応的思考", "7.今の感情"
  ];
  const handleSideBarClick = (index) => {
    setSelectSideBarIndex(index);
  }
  
  return (
    <Stack
      direction={'column'}
      sx={{
      height:'100%',
      justifyContent:'space-evenly',
    }}>
      {sideBarLists.map((list, index) => {
        const isSelected = index === selectSideBarIndex; //ボタンが選ばれている場合、色を変更
        return (
        <Button
          key={index}
          variant='contained'
          color={isSelected ? 'secondary' : 'primary'}
          onClick={() => handleSideBarClick(index)}
        >
          <List id={index}>{list}</List>
        </Button>)}
      )}
    </Stack>
  )
}

export default SideBar
