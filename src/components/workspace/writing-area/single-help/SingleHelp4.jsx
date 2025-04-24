import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from '@mui/material'
import React, { useContext } from 'react'
import WorkSpaceContext from '../../../../context/WorkSpaceContext';

const SingleHelp4 = () => {
    const { isSingleHelpOpen, setIsSingleHelpOpen, selectSideBarIndex } = useContext(WorkSpaceContext);
    return (
    <Dialog
        open={isSingleHelpOpen}
        onClose={() => setIsSingleHelpOpen(false)}
        disableEnforceFocus
    >
        <DialogTitle>５：反証</DialogTitle>
        <DialogContent>
            <DialogContentText>「２：自動思考」とは矛盾することを書いてください。</DialogContentText>
            <DialogContentText>※「２：自動思考」で書いたことは勘違いかも？</DialogContentText>
            <DialogContentText>と思えるような事柄を思い返す項目です。</DialogContentText>
            <Divider sx={{my:'10px'}} />
            <DialogContentText>例）</DialogContentText>
            <DialogContentText>上司のチャットは、いつも淡白な気がする</DialogContentText>
            <DialogContentText>上司と対面であったときは気さくに話してくれる</DialogContentText>
            <DialogContentText>最近、（自分は）疲れている（からミスが起きても仕方ない）</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setIsSingleHelpOpen(false)}>閉じる</Button>
        </DialogActions>
    </Dialog>
    )
}

export default SingleHelp4
