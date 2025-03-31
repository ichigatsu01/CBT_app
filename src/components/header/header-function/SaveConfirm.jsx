import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useContext, useState } from 'react'
import HeaderContext from '../../../context/HeaderContext';

const SaveConfirm = () => {
  const { isSaveOpen, setIsSaveOpen } = useContext(HeaderContext);

  return (
    <Dialog
        open={isSaveOpen}
        onClose={()=>setIsSaveOpen(false)}
        //下二行はスクリーンリーダー対応みたいなもの。
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle>保存します</DialogTitle>
        <DialogContent>
            <DialogContentText>
                ※同名タイトルのものがあると上書きするか確認する
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setIsSaveOpen(false)}>OK</Button>
        </DialogActions>
    </Dialog>
  )
}

export default SaveConfirm
