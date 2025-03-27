import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material'
import React, { useContext } from 'react'
import WorkSpaceContext from '../../../context/WorkSpaceContext'

const WriteContentClearConfirm = () => {
    const {setWriteContents,
        isOpenWriteContentClearBtn, setIsOpenWriteContentClearBtn, selectSideBarIndex}
        = useContext(WorkSpaceContext);
    const clearContentExe = () => {
        setWriteContents[selectSideBarIndex]("");
        setIsOpenWriteContentClearBtn(false);
    }
  return (
    <Dialog
        open={isOpenWriteContentClearBtn}
        onClose={() => setIsOpenWriteContentClearBtn(false)}
        //下二行はスクリーンリーダー対応みたいなもの。
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableEnforceFocus
    >
        <DialogContent>
            <DialogContentText>
                この項目の入力内容をクリアしますか？
            </DialogContentText>
            <DialogActions>
                <Button onClick={() => setIsOpenWriteContentClearBtn(false)}>いいえ</Button>
                <Button onClick={() => clearContentExe()}>はい</Button>
            </DialogActions>
        </DialogContent>
    </Dialog>
  )
}

export default WriteContentClearConfirm
