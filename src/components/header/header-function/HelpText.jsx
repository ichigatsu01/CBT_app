import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, } from '@mui/material'
import React, { useContext } from 'react'
import HeaderContext from '../../../context/HeaderContext'
import InfoIcon from '@mui/icons-material/Info';

const HelpText = () => {
  const {isHelpOpen, setIsHelpOpen} = useContext(HeaderContext);
  return (
    <Dialog
      open={isHelpOpen}
      onClose={() => setIsHelpOpen(false)}
      disableEnforceFocus
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      >
      <DialogTitle>記入の際の参考にしてください：</DialogTitle>
      <DialogContent>
        <DialogContentText>入力が完了した、または中断したい場合は保存ボタンを押すと</DialogContentText>
        <DialogContentText>入力した内容を保存することができます。</DialogContentText>
        <DialogContentText>なお、「タイトル」「作成日」「経験日」は入力必須です。</DialogContentText>
        <Divider sx={{my:'10px'}} />
        <DialogContentText>作成日にはコラム表を書いている日付を、</DialogContentText>
        <DialogContentText>経験日は出来事があった日を入力してください。</DialogContentText>
        <DialogContentText>入力を再開する、または内容を確認する場合は読込ボタンを押して下さい。</DialogContentText>
        <Divider sx={{my:'10px'}} />
        <DialogContentText>入力内容に悩んだ場合、画面右上の<InfoIcon />を押すと</DialogContentText>
        <DialogContentText>項目ごとのヘルプを参照できます。</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsHelpOpen(false)}>閉じる</Button>
      </DialogActions>
    </Dialog>
  )
}

export default HelpText
