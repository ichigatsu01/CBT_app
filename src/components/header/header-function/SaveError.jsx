import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useContext } from 'react'
import HeaderContext from '../../../context/HeaderContext'

const SaveError = () => {
    const { isSaveErrorOpen, setIsSaveErrorOpen } = useContext(HeaderContext);

    return (
    <Dialog
        open={isSaveErrorOpen}
        onClose={()=>setIsSaveErrorOpen(false)}
        //下二行はスクリーンリーダー対応みたいなもの。
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle>保存できません！</DialogTitle>
        <DialogContent>
            <DialogContentText>
                タイトル、作成日、経験日は入力必須です。
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=>setIsSaveErrorOpen(false)}>OK</Button>
        </DialogActions>
    </Dialog>
    )
}

export default SaveError
