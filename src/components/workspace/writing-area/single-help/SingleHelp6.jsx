import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from '@mui/material'
import React, { useContext } from 'react'
import WorkSpaceContext from '../../../../context/WorkSpaceContext';

const SingleHelp6 = () => {
    const { isSingleHelpOpen, setIsSingleHelpOpen, selectSideBarIndex } = useContext(WorkSpaceContext);
    return (
        <Dialog
            open={isSingleHelpOpen}
            onClose={() => setIsSingleHelpOpen(false)}
            disableEnforceFocus
        >
            <DialogTitle>６：今の気分・感情</DialogTitle>
            <DialogContent>
                <DialogContentText>これまでの項目を一通り考えてみた結果、</DialogContentText>
                <DialogContentText>「３：当時の気分・感情」から気分がどう変化したか、</DialogContentText>
                <DialogContentText>同じように書いてください。</DialogContentText>
                <DialogContentText>新たに気分・感情を追加しても問題ありません。</DialogContentText>
                <DialogContentText>なお、ボタンを押した際に表示されるダイアログから選ぶこともできます。</DialogContentText>
                <DialogContentText>「３からコピー」ボタンを押すと、３で入力した内容を転記できます。</DialogContentText>
                <Divider sx={{my:'10px'}} />
                <DialogContentText>例）</DialogContentText>
                <DialogContentText>悲しい（20%）　申し訳ない（20%）　無力感（0%）</DialogContentText>
                <DialogContentText>がっかり（10%）　不安（20%）　怒り（20%）</DialogContentText>
                <DialogContentText>喜び、幸せ（10%）</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setIsSingleHelpOpen(false)}>閉じる</Button>
            </DialogActions>
        </Dialog>

    )
}

export default SingleHelp6
