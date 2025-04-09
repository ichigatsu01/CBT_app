import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from '@mui/material'
import React, { useContext } from 'react'
import WorkSpaceContext from '../../../../context/WorkSpaceContext';

const SingleHelp5 = () => {
    const { isSingleHelpOpen, setIsSingleHelpOpen, selectSideBarIndex } = useContext(WorkSpaceContext);
    return (
    <Dialog
        open={isSingleHelpOpen}
        onClose={() => setIsSingleHelpOpen(false)}
        disableEnforceFocus
    >
        <DialogTitle>６：適応的思考</DialogTitle>
        <DialogContent>
            <DialogContentText>以下を参考に、ここまで書いてきて思いつくものを書いてください。</DialogContentText>
            <DialogContentText>〇根拠と反証を“しかし”で繋いだことを書く</DialogContentText>
            <DialogContentText>〇もう一度冷静に考えて、浮かぶことを書く</DialogContentText>
            <DialogContentText>〇第三者の視点から考えたことを書く</DialogContentText>
            <DialogContentText>　例）</DialogContentText>
            <DialogContentText>　・自分がもう一人いたら何と言うか？</DialogContentText>
            <DialogContentText>　・優しいおばあちゃんがこの話を聞いたら、何と言うか？</DialogContentText>
            <DialogContentText>　・他の人の出来事なら、自分は何と言うか？</DialogContentText>
            <DialogContentText>　・その出来事から得られるメリットはないか？</DialogContentText>
            <Divider sx={{my:'10px'}} />
            <DialogContentText>例）</DialogContentText>
            <DialogContentText>上司はいつもチャットは淡白なので、気にすることでもない</DialogContentText>
            <DialogContentText>疲れていれば、誰だってミスする</DialogContentText>
            <DialogContentText>ミスするぐらい頑張っていて偉い</DialogContentText>
            <DialogContentText>ミスして、かえって気が引き締まってよい</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setIsSingleHelpOpen(false)}>閉じる</Button>
        </DialogActions>
    </Dialog>
    )
}

export default SingleHelp5
