import { Button, Dialog, DialogContentText, DialogTitle, Divider, IconButton, List, ListItem, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
// import LoadSQLtest from './LoadSQLtest'
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import HeaderContext from '../../../context/HeaderContext';

const SQLList = () => {
    const { isLoadOpen, setIsLoadOpen, setSelectedItem, setIsLoadConfirmOpen, loadSQLData } = useContext(HeaderContext);
  return (
    <>
        <Dialog
            open={isLoadOpen}
            onClose={() => setIsLoadOpen(false)}
            //下二行はスクリーンリーダー対応みたいなもの。
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>
                読み込む
                <DownloadIcon sx={{ mx: 0.5 }} />
                または削除
                <DeleteIcon sx={{ mx: 0.5 }} />
                する<br/>データを選んでください
            </DialogTitle>
            <DialogContentText sx={{marginLeft:'10px'}}>タイトル / 作成日</DialogContentText>
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
                                        direction='row'
                                        spacing={1}
                                        sx={{
                                            flex:'0.7',
                                        }}
                                    >
                                        {/* 長いタイトルの場合は最初の8文字を表示、とかしないといけないと思う */}
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
                                        <IconButton
                                            aria-label="load"
                                            autoFocus={false}
                                            onClick={() => {
                                                setSelectedItem(item)
                                                setIsLoadConfirmOpen(true)
                                            }}
                                        >
                                            <DownloadIcon fontSize="inherit" />
                                        </IconButton>
                                        <IconButton aria-label="delete" autoFocus={false}>
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>
                                        {/* <Button variant='contained'>削除</Button> */}
                                    </Stack>
                                </Stack>
                            </ListItem>
                            {index < loadSQLData.length - 1 && <Divider variant="middle" />}
                        </React.Fragment>
                    ))
                }
            </List>
        </Dialog>
        {/* <LoadSQLtest
            isLoadSqlOpen={isLoadSqlOpen}
            setIsLoadSqlOpen={setIsLoadSqlOpen}
            selectedItem={selectedItem}
        /> */}
    </>
  )
}

export default SQLList
