import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useContext } from 'react'
import HeaderContext from '../../../context/HeaderContext';
import WorkSpaceContext from '../../../context/WorkSpaceContext';

const LoadConfirm = () => {
    const { isLoadConfirmOpen, setIsLoadConfirmOpen, selectedItem, setIsLoadOpen,
        setInputTitle, setInputDateCreated, setInputHappened,
    } = useContext(HeaderContext);
    const { setWriteContents } = useContext(WorkSpaceContext);

    function loadContentsAll() {
        setInputTitle(selectedItem.title);
        setInputDateCreated(selectedItem.date_created);
        setInputHappened(selectedItem.date_happened);
        setWriteContents[0](selectedItem.content0);
        setWriteContents[1](selectedItem.content1);
        setWriteContents[2](selectedItem.content2);
        setWriteContents[3](selectedItem.content3);
        setWriteContents[4](selectedItem.content4);
        setWriteContents[5](selectedItem.content5);
        setWriteContents[6](selectedItem.content6);
        console.log("全体読込実行")
        console.log(selectedItem.title, selectedItem.date_created, selectedItem.date_happened)
    }

    return (
        <Dialog
            open={isLoadConfirmOpen}
            onClose={()=>setIsLoadConfirmOpen(false)}
            //下二行はスクリーンリーダー対応みたいなもの。
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>指定したコラム表を呼び出しますか？</DialogTitle>
            <DialogContent>
                <DialogContentText color='red'>
                    ※入力中の内容があれば上書きされます！
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus={false} onClick={() => {
                    loadContentsAll()
                    setIsLoadConfirmOpen(false)
                    setIsLoadOpen(false)
                    } }>はい</Button>
                <Button autoFocus={false} onClick={() => setIsLoadConfirmOpen(false) }>いいえ</Button>
            </DialogActions>
        </Dialog>
    )
}

export default LoadConfirm
