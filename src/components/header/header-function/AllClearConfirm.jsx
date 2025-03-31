import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material'
import React, { useContext } from 'react'
import { HeaderContext } from '../../../context/HeaderContext'
import { WorkSpaceContext } from '../../../context/WorkSpaceContext';

const AllClearConfirm = () => {
    const { isAllClearOpen, setIsAllClearOpen, } = useContext(HeaderContext);
    const { setWriteContents } = useContext(WorkSpaceContext);
    const allClearExe = () => {
        setWriteContents.forEach((content, index) => {
            if (index === 2 || index === 6) {
                content([{emotion:'', percent:''}]);
            } else {
                content("");
            }
        });
    };

    return (
        <Dialog
            open={isAllClearOpen}
            onClose={()=>setIsAllClearOpen(false)}
            //下二行はスクリーンリーダー対応みたいなもの。
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <DialogContentText>
                    １～７の入力内容を削除しますか？
                </DialogContentText>
                <DialogActions>
                    <Button onClick={() => {
                        allClearExe()
                        setIsAllClearOpen(false)
                    }}>はい</Button>
                    <Button onClick={() => setIsAllClearOpen(false)}>いいえ</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}

export default AllClearConfirm
