import { Button, List, Stack, SwipeableDrawer } from '@mui/material'
import React, { useContext } from 'react'
import WorkSpaceContext from '../../../context/WorkSpaceContext';
import CloseIcon from '@mui/icons-material/Close';

const SideBarHamburgerMenu = () => {
  const {selectSideBarIndex, setSelectSideBarIndex, isSideBarOpen, setIsSideBarOpen} = useContext(WorkSpaceContext);
  const sideBarLists = [
    "1.出来事", "2.自動思考", "3.当時の感情", "4.根拠", "5.反証", "6.適応的思考", "7.今の感情"
  ];
  const handleSideBarClick = (index) => {
    setSelectSideBarIndex(index);
  }
  
  return (
    <SwipeableDrawer
      open={isSideBarOpen}
      onClose={() => setIsSideBarOpen(false)
      }
    anchor='left'>
      <Stack
        direction={'column'}
        sx={{
        height:'100%',
        width:'40vw',
        justifyContent:'space-evenly',
        px:'20px',
        backgroundColor: 'var(--main-color)'
      }}>
        {sideBarLists.map((list, index) => {
          const isSelected = index === selectSideBarIndex; //ボタンが選ばれている場合、色を変更
          return (
          <Button
            key={index}
            variant='contained'
            color={isSelected ? 'secondary' : 'primary'}
            onClick={() => {
              handleSideBarClick(index)
              setIsSideBarOpen(false)
            }}
          >
            <List id={index}>{list}</List>
          </Button>)
          })
        }
        <Button
            variant='contained'
            color='success'
            onClick={() => setIsSideBarOpen(false)}
            sx={{height: '50px', }}
        >
          <CloseIcon sx={{ mr:1 }} />閉じる
        </Button>
      </Stack>
    </SwipeableDrawer>
  )
}

export default SideBarHamburgerMenu
