import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from '@mui/material'
import React, { useContext } from 'react'
import WorkSpaceContext from '../../../../context/WorkSpaceContext';

const SingleHelp3 = () => {
    const { isSingleHelpOpen, setIsSingleHelpOpen, selectSideBarIndex } = useContext(WorkSpaceContext);
    return (
    <Dialog
        open={isSingleHelpOpen}
        onClose={() => setIsSingleHelpOpen(false)}
        disableEnforceFocus
    >
        <DialogTitle>４：根拠</DialogTitle>
        <DialogContent>
            <DialogContentText>「２：自動思考」で書いたことの、</DialogContentText>
            <DialogContentText>根拠・理由・関連要素を書く。</DialogContentText>
            <DialogContentText>（なぜ２のように思ったか？）</DialogContentText>
            <Divider sx={{my:'10px'}} />
            <DialogContentText>例）</DialogContentText>
            <DialogContentText>淡白なチャット文だった</DialogContentText>
            <DialogContentText>つい最近も、上司から別件で指摘を受けている</DialogContentText>
            <DialogContentText>気付けそうなミスであった</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setIsSingleHelpOpen(false)}>閉じる</Button>
        </DialogActions>
    </Dialog>

    )
}

export default SingleHelp3
