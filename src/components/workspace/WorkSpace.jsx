import React from 'react'
import SideBar from "./side-bar/SideBar";
import WritingArea from "./writing-area/WritingArea";
import { Box, Stack } from '@mui/material';

const WorkSpace = () => {
  return (
    <Stack
      direction={'row'}
      sx={{
        height:'85%',
        width:'100%',
        margin:'10px 20px',
      }}
    >
      <Box sx={{flex:'0.2'}}>
        <SideBar />
      </Box>
      <Box sx={{flex:'0.8'}}>
        <WritingArea />
      </Box>
    </Stack>
  )
}

export default WorkSpace
