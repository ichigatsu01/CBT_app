import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from '@mui/material'
import React, { useContext } from 'react'
import WorkSpaceContext from '../../../../context/WorkSpaceContext';

const SingleHelp1 = () => {
    const { isSingleHelpOpen, setIsSingleHelpOpen } = useContext(WorkSpaceContext);
    return (
    <Dialog
        open={isSingleHelpOpen}
        onClose={() => setIsSingleHelpOpen(false)}
        disableEnforceFocus
    >
        <DialogTitle>２：自動思考</DialogTitle>
        <DialogContent>
            <DialogContentText>その時頭に浮かんでいた</DialogContentText>
            <DialogContentText>考え・イメージ・過去の記憶などを書いてください。</DialogContentText>
            <Divider sx={{my:'10px'}} />
            <DialogContentText>例）</DialogContentText>
            <DialogContentText>上司に手間を取らせて、申し訳ない。</DialogContentText>
            <DialogContentText>上司に幻滅されたかも。</DialogContentText>
            <DialogContentText>私はこんなミスにも気が付かないのか…</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setIsSingleHelpOpen(false)}>閉じる</Button>
        </DialogActions>
    </Dialog>
    )
}

export default SingleHelp1
