import React, { useContext } from 'react'
import HeaderContext from '../../../context/HeaderContext'
import DataObjectIcon from '@mui/icons-material/DataObject';
import { IconButton } from '@mui/material';

const WriteOutJson = () => {
    const { selectedItem } = useContext(HeaderContext);
    const dataJson = {
        title: selectedItem.title,
        date_created: selectedItem.date_created,
        date_happened: selectedItem.date_happened,
        content0: selectedItem.content0,
        content1: selectedItem.content1,
        content2: selectedItem.content2,
        content3: selectedItem.content3,
        content4: selectedItem.content4,
        content5: selectedItem.content5,
        content6: selectedItem.content6,
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

    const handleJsonDownload = (data, filename ) => {
        const json = JSON.stringify(data, null, 2) //変換する対象, 文字列化の手順を示す(?), インデントの文字数
        const blob = new Blob([json], {type: "application/json"})
        const url = URL.createObjectURL(blob)

        const link = document.createElement("a");

        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click(); //ユーザによるクリックと同じ反応を誘発
        document.body.removeChild(link);
        URL.revokeObjectURL(url)
    }

  return (
    <>
        <IconButton>
            <DataObjectIcon />
        </IconButton>
    </>
  )
}

export default WriteOutJson
