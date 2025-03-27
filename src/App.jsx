import './App.css'
import Header from './components/header/Header'
import WorkSpace from './components/workspace/WorkSpace';
import HelpText from './components/header/header-function/HelpText';
import HeaderHamburgerMenu from './components/header/hamburger-menu/HeaderHamburgerMenu';
import { Stack } from '@mui/material';
import WriteContentClearConfirm from './components/workspace/writing-area/WriteContentClearConfirm';
import EmotionExampleText from './components/workspace/writing-area/EmotionExampleText';

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

      {/* 以下はボタン式で開閉するダイアログ */}
      <HelpText />
      <WriteContentClearConfirm />
      <EmotionExampleText />

      {/* 以下xs画面で表示するハンバーガーメニュー、サイドバーメニュー */}
      <HeaderHamburgerMenu />
    </>
  )
}

export default App