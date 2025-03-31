import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useContext } from 'react'
import HeaderContext from '../../../context/HeaderContext';

const LoadConfirm = () => {
    const { isLoadOpen, setIsLoadOpen } = useContext(HeaderContext);
    return (
        <Dialog
            open={isLoadOpen}
            onClose={()=>setIsLoadOpen(false)}
            //下二行はスクリーンリーダー対応みたいなもの。
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>読み込みます</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    SQL画面から保存してるデータリストを呼び出す
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>setIsLoadOpen(false)}>はい</Button>
                <Button onClick={()=>setIsLoadOpen(false)}>いいえ</Button>
            </DialogActions>
        </Dialog>
    )
}

export default LoadConfirm
