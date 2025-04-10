import React, { useContext } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import HeaderContext from '../../../context/HeaderContext';
import { fetchPHPfile } from './fetchPHPfile';

const DeleteConfirm = () => {
    const { isDeleteConfirmOpen, setIsDeleteConfirmOpen, selectedItem, setLoadSQLData
    } = useContext(HeaderContext);
    // console.log(selectedItem.id)

    const handleDelete = async (id) => {
      try {
        const response = await fetch("https://ichigatsu.sakura.ne.jp/CBT-app/delete.php", {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({id}),
        }
      );
      if (!response.ok) {
        throw new Error("削除に失敗しました");
      }

      const result = await response.json();
      console.log(result.message)
      } catch (error) {
        console.error(error);
      }

      fetchPHPfile(setLoadSQLData) //削除後、再度SQLlistを更新したい
    };

  return (
        <Dialog
            open={isDeleteConfirmOpen}
            onClose={()=>setIsDeleteConfirmOpen(false)}
            //下二行はスクリーンリーダー対応みたいなもの。
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>選んだ項目を削除しますか？</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    タイトル：{selectedItem.title}
                </DialogContentText>
                <DialogContentText>
                    作成日：{selectedItem.date_created}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus={false} onClick={() => {
                    handleDelete(selectedItem.id)
                    setIsDeleteConfirmOpen(false)
                    // setIsLoadOpen(false)
                    } }>はい</Button>
                <Button autoFocus={false} onClick={() => setIsDeleteConfirmOpen(false) }>いいえ</Button>
            </DialogActions>
        </Dialog>
  )
}

export default DeleteConfirm
