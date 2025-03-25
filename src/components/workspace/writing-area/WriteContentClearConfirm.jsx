import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useContext } from 'react'
import WorkSpaceContext from '../../../context/WorkSpaceContext'

const WriteContentClearConfirm = () => {
    const {setWriteContents,
        isOpenWriteContentBtn, setIsOpenWriteContentBtn, selectSideBarIndex}
        = useContext(WorkSpaceContext);
    const clearContentExe = () => {
        setWriteContents[selectSideBarIndex]("");
        setIsOpenWriteContentBtn(false);
    }
  return (
    <Dialog
        open={isOpenWriteContentBtn}
        onClose={() => setIsOpenWriteContentBtn(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle>hello.</DialogTitle>
        <DialogContent>
            <DialogContentText>
                クリアしていいかの確認メッセージを表示
            </DialogContentText>
            <DialogActions>
                <Button onClick={() => setIsOpenWriteContentBtn(false)}>いいえ</Button>
                <Button onClick={() => clearContentExe()}>はい</Button>
            </DialogActions>
        </DialogContent>
    </Dialog>
  )
}

export default WriteContentClearConfirm
