import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useContext, useState } from 'react'
import HeaderContext from '../../../context/HeaderContext';
import WorkSpaceContext from '../../../context/WorkSpaceContext';

const SaveConfirm = () => {
  const { isSaveOpen, setIsSaveOpen, saveDataObj, setSaveDataObj,
    inputTitle, inputDateCreated, inputHappened
    } = useContext(HeaderContext);
  const {writeContents} = useContext(WorkSpaceContext);

  //保存時に入力した内容をまとめてJSON形式に変換し、PHPに送信
  const saveDataCreate = () => {
    const newData = {
      title: inputTitle,
      date_created: inputDateCreated,
      date_happened: inputHappened,
      content0: writeContents[0],
      content1: writeContents[1],
      content2: writeContents[2],
      content3: writeContents[3],
      content4: writeContents[4],
      content5: writeContents[5],
      content6: writeContents[6],
    }
    Object.entries(newData).forEach(element => {
      return console.log(element)
    });//確認用。
    //PHPファイルへsaveDataObjを送信
    // fetch("http://localhost/works/cbt_app/save.php", {
    fetch("https://ichigatsu.sakura.ne.jp/CBT-app/save.php", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newData)
    })
    .then(response => response.json())
    .then(result => {
      console.log("サーバからのレスポンス（成功）： ", result)
    })
    .catch(error => console.log("サーバからのレスポンス（エラー）： ", error))
  }

  return (
    <Dialog
        open={isSaveOpen}
        onClose={()=>setIsSaveOpen(false)}
        //下二行はスクリーンリーダー対応みたいなもの。
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle>入力中の内容を保存しますか？</DialogTitle>
        <DialogContent>
            {/* <DialogContentText>
                ※同名タイトルのものがあると上書きするか確認する
            </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={()=>{
              saveDataCreate()
              setIsSaveOpen(false)
            }}
          >はい</Button>
          <Button
            onClick={()=>{
              setIsSaveOpen(false)
            }}
          >いいえ</Button>
        </DialogActions>
    </Dialog>
  )
}

export default SaveConfirm
