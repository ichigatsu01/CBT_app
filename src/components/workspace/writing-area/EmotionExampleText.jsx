import React, { useContext } from 'react'
import WorkSpaceContext from '../../../context/WorkSpaceContext'
import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, useTheme } from '@mui/material';

const EmotionExampleText = () => {
    const {
        isOpenEmotionExample, setIsOpenEmotionExample,
        setSelectedEmotion, addEmotionFromExample
    } = useContext(WorkSpaceContext);

    //MUIのカラーパレットをtheme.paletteで引っ張ってくる
    const theme = useTheme();
    const emotionListNegative = ['憂うつ', '悲しい', '傷ついた', 'むなしい', 'がっかり', '絶望', 'みじめ', '無力感', '罪悪感', 'うんざり', '屈辱', '怯え', '不安', '心配', 'パニック', '失望', '落胆', '恐怖', '困惑', '悔しい', '呆れる', 'オロオロ', '落ち込む', '気がかり', '恥ずかしい', '怒り', 'イライラ', 'ぞっとする', '孤独', '混乱', '神経質', '退屈', '嫉妬', '敵意', '敗北感', '疲労感', '不満', '緊張'
    ]
    const emotionListPositive = [
        '興奮', '無我夢中', '勇敢', '陽気', '喜び', 'リラックス', '励まされる', '安心感', '楽しい', '幸せ', '嬉しい', 'ワクワク', '満足', '感謝', '平穏', '誇り', '親切', 'ドキドキ', 'やる気', '平和', '温かい', '賢い', '感動', '愛おしい', '熱心な'
    ]

    return (
    <Dialog
        open={isOpenEmotionExample}
        onClose={() => setIsOpenEmotionExample(false)}
        aria-labelledby="emotion-example-title"
        aria-describedby="emotion-example-description"
        disableEnforceFocus
    >
        <DialogTitle>記入の際の参考にしてください：</DialogTitle>
        <DialogContent>
        <Box>
            {emotionListNegative.map((word, index) => (
                <Chip
                    key={index}
                    label={word}
                    onClick={()=>{
                        setSelectedEmotion(word)
                        addEmotionFromExample(word)
                        setIsOpenEmotionExample(false)
                    }}
                    sx={{margin:'5px', bgcolor:theme.palette.info.main, color:theme.palette.primary.contrastText}}
                />
            ))}
        </Box>
        <Divider sx={{my:'20px'}}/>
        <Box>
            {emotionListPositive.map((word, index) => (
                <Chip
                    key={index}
                    label={word}
                    onClick={()=>{
                        setSelectedEmotion(word)
                        addEmotionFromExample(word)
                        setIsOpenEmotionExample(false)
                    }}
                    sx={{margin:'5px', bgcolor:theme.palette.warning.light, color:theme.palette.warning.contrastText}}
                />
            ))}
        </Box>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setIsOpenEmotionExample(false)}>閉じる</Button>
        </DialogActions>
    </Dialog>
  )
}

export default EmotionExampleText
