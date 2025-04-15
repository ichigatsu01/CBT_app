import { Box, Button, Dialog, DialogContentText, DialogTitle, Divider, IconButton, List, ListItem, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
// import LoadSQLtest from './LoadSQLtest'
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import HeaderContext from '../../../context/HeaderContext';
import DataObjectIcon from '@mui/icons-material/DataObject';

const SQLList = () => {
    const { isLoadOpen, setIsLoadOpen, selectedItem, setSelectedItem, setIsLoadConfirmOpen, loadSQLData,
        setIsDeleteConfirmOpen,
    } = useContext(HeaderContext);

    // JSONファイル書き出し関数
    // const writeOutJson = () => {
        
        const handleJsonDownload = (item) => {
            const dataJson = {
                title: item.title,
                date_created: item.date_created,
                date_happened: item.date_happened,
                content0: item.content0,
                content1: item.content1,
                content2: item.content2,
                content3: item.content3,
                content4: item.content4,
                content5: item.content5,
                content6: item.content6,
            }

            const fileName = (prefix = "cbt") => {
                const now = new Date();
                const yyyy = now.getFullYear();
                const mm = String(now.getMonth() + 1).padStart(2, '0');
                const dd = String(now.getDate()).padStart(2, '0');
                const hh = String(now.getHours()).padStart(2, '0');
                const min = String(now.getMinutes()).padStart(2, '0');
                return `${prefix}_${yyyy}-${mm}-${dd}_${hh}-${min}.json`
            }

            const json = JSON.stringify(dataJson, null, 2) //変換する対象, 文字列化の手順を示す(?), インデントの文字数
            const blob = new Blob([json], {type: "application/json"})
            const url = URL.createObjectURL(blob)
    
            const link = document.createElement("a");
    
            link.href = url;
            link.download = fileName();
            document.body.appendChild(link);
            link.click(); //ユーザによるクリックと同じ反応を誘発
            document.body.removeChild(link);
            URL.revokeObjectURL(url)

            alert("jsonファイルをダウンロードしました");
        }
    // }


    return (
    <>
        <Dialog
            open={isLoadOpen}
            onClose={() => setIsLoadOpen(false)}
            //下二行はスクリーンリーダー対応みたいなもの。
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{maxWidth:'500px', mx:'auto'}}
        >
            <DialogTitle>
                <Box sx={{flexWrap:"wrap"}}>
                    読み込む
                    <DownloadIcon sx={{ mx: 0.5 }} />
                    または削除
                    <DeleteIcon sx={{ mx: 0.5 }} />
                    するデータを選んでください
                </Box>
            </DialogTitle>
            <Stack
                direction='row'
                sx={{
                    display:'flex', justifyContent:'space-between', alignItems:'center',
                    mx:'10px'
                }}
            >
                <DialogContentText sx={{marginLeft:'10px'}}>タイトル / 作成日</DialogContentText>
                <Button autoFocus={false} onClick={() => setIsLoadOpen(false)}>閉じる</Button>
            </Stack>
            <List>
                {
                    loadSQLData.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <ListItem>
                                <Stack
                                    direction='row'
                                    spacing={2}
                                    sx={{
                                        justifyContent: "space-around", // ボタンを右寄せにする
                                        alignItems: "center", // 垂直方向中央揃え
                                        width: "100%", // リスト幅を最大に
                                    }}
                                >
                                    <Stack
                                        direction={{xs:'column', md:'row'}}
                                        spacing={1}
                                        sx={{
                                            flex:'0.7',
                                        }}
                                    >
                                        {/* 長いタイトルの場合は最初の8文字を表示 */}
                                        {item.title.length > 8 ? (
                                            <Typography
                                            sx={{
                                                whiteSpace:'nowrap',
                                                width:{xs:'120px', md:'150px'}
                                            }
                                        }>{item.title.substring(0, 8)}...</Typography>
                                        ) : (
                                            <Typography
                                                sx={{
                                                    whiteSpace:'nowrap',
                                                    width:{xs:'120px', md:'150px'}
                                                }
                                            }>{item.title}</Typography>
                                        )}
                                        <Divider orientation="vertical" variant="middle" flexItem />
                                        <Typography
                                            sx={{
                                                whiteSpace:'nowrap',
                                                width:{xs:'80px', md:'120px'}
                                            }
                                        }>{item.date_created}</Typography>
                                    </Stack>
                                    <Stack
                                        direction='row'
                                        spacing={1}
                                        sx={{
                                            flex:'0.3',
                                        }}
                                        
                                    >
                                        <IconButton // 読込ボタン
                                            aria-label="load"
                                            autoFocus={false}
                                            onClick={() => {
                                                setSelectedItem(item)
                                                setIsLoadConfirmOpen(true)
                                            }}
                                        >
                                            <DownloadIcon fontSize="inherit" />
                                        </IconButton>
                                        <IconButton // 削除ボタン
                                            aria-label="delete"
                                            autoFocus={false}
                                            onClick={() => {
                                                setSelectedItem(item)
                                                setIsDeleteConfirmOpen(true)
                                            }}
                                        >
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>
                                        <IconButton // JSONファイル書き出しボタン
                                            aria-label="JSON"
                                            autoFocus={false}
                                            onClick={() => {
                                                // setSelectedItem(item)
                                                handleJsonDownload(item)
                                            }}
                                        >
                                            <DataObjectIcon fontSize="inherit" />
                                        </IconButton>
                                    </Stack>
                                </Stack>
                            </ListItem>
                            {index < loadSQLData.length - 1 && <Divider variant="middle" />}
                        </React.Fragment>
                    ))
                }
            </List>
        </Dialog>
    </>
  )
}

export default SQLList
