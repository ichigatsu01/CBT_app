import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from '@mui/material'
import React, { useContext } from 'react'
import WorkSpaceContext from '../../../../context/WorkSpaceContext';

const SingleHelp0 = () => {
    const { isSingleHelpOpen, setIsSingleHelpOpen } = useContext(WorkSpaceContext);
    return (
    <Dialog
        open={isSingleHelpOpen}
        onClose={() => setIsSingleHelpOpen(false)}
        disableEnforceFocus
    >
        <DialogTitle>１：出来事</DialogTitle>
        <DialogContent>
            <DialogContentText>「いつ・どこで・誰が（誰と）どのように何をしていたか」を</DialogContentText>
            <DialogContentText>出来るだけ具体的に書いてください。</DialogContentText>
            <Divider sx={{my:'10px'}} />
            <DialogContentText>例）</DialogContentText>
            <DialogContentText>昨日、チャットで上司からミスを指摘された。</DialogContentText>
            <DialogContentText>「〇〇の件、△△が間違ってます。気を付けて」</DialogContentText>
            <DialogContentText>という内容だった。</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setIsSingleHelpOpen(false)}>閉じる</Button>
        </DialogActions>
    </Dialog>
    )
}

export default SingleHelp0
