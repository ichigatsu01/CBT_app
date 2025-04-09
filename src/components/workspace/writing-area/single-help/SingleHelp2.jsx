import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from '@mui/material'
import React, { useContext } from 'react'
import WorkSpaceContext from '../../../../context/WorkSpaceContext';

const SingleHelp2 = () => {
    const { isSingleHelpOpen, setIsSingleHelpOpen, selectSideBarIndex } = useContext(WorkSpaceContext);
    return (
        <Dialog
            open={isSingleHelpOpen}
            onClose={() => setIsSingleHelpOpen(false)}
            disableEnforceFocus
        >
            <DialogTitle>３：当時の気分・感情</DialogTitle>
            <DialogContent>
                <DialogContentText>どのような気分・感情がどの程度(※)あったか書いてください。</DialogContentText>
                <DialogContentText>（※ 感情それぞれを最小1~最大100の範囲で）</DialogContentText>
                <DialogContentText>感情の種類は「感情の例」ボタンから参照してください。</DialogContentText>
                <DialogContentText>なお、ボタンを押した際に表示されるダイアログから選ぶこともできます。</DialogContentText>
                <Divider sx={{my:'10px'}} />
                <DialogContentText>例）</DialogContentText>
                <DialogContentText>悲しい（90%）　申し訳ない（80%）　無力感（30%）</DialogContentText>
                <DialogContentText>がっかり（40%）　不安（40%）　怒り（20%）</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setIsSingleHelpOpen(false)}>閉じる</Button>
            </DialogActions>
        </Dialog>
    )
}

export default SingleHelp2
