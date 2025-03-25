import './App.css'
import Header from './components/header/Header'
import WorkSpace from './components/workspace/WorkSpace';
import HelpText from './components/header/header-function/HelpText';
import HeaderHamburgerMenu from './components/header/hamburger-menu/HeaderHamburgerMenu';
import { Stack } from '@mui/material';
import WriteContentClearConfirm from './components/workspace/writing-area/WriteContentClearConfirm';

function App() {

  return (
    <>
      <Stack
        direction={'column'}
        sx={{
          height:'100%',
          width:'100%',
        }}
      >
        <Header sx={{flex:'0.2'}} />
        <WorkSpace sx={{flex:'0.8'}} />
      </Stack>
      <HelpText />
      <WriteContentClearConfirm />
      <HeaderHamburgerMenu />
    </>
  )
}

export default App