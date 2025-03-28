import React, { createContext, useState } from 'react'

const WorkSpaceContext = createContext();

export const WorkSpaceProvider = ({children}) => {
    //content2, content6は感情と割合を入力するため他のcontentと仕様を変えている
    const [selectSideBarIndex, setSelectSideBarIndex] = useState(0);
    const [writeContent0, setWriteContent0] = useState("");
    const [writeContent1, setWriteContent1] = useState("");
    const [writeContent2, setWriteContent2] = useState([{emotion:'', percent:''}]);
    const [writeContent3, setWriteContent3] = useState("");
    const [writeContent4, setWriteContent4] = useState("");
    const [writeContent5, setWriteContent5] = useState("");
    const [writeContent6, setWriteContent6] = useState([{emotion:'', percent:''}]);

    // writeContent0, setWriteContentを配列化して取り出しやすくする
    const writeContents = [
      writeContent0, writeContent1, writeContent2, writeContent3, writeContent4, writeContent5, writeContent6,
    ];
    const setWriteContents = [
      setWriteContent0, setWriteContent1, setWriteContent2, setWriteContent3,
      setWriteContent4, setWriteContent5, setWriteContent6,
    ]

    // 削除確認ボタン:クリックで確認画面を開く
    const [isOpenWriteContentClearBtn, setIsOpenWriteContentClearBtn] = useState(false);

    // Content2,6で感情を選択するときに参考にしてもらうサンプル画面を開く
    const [isOpenEmotionExample, setIsOpenEmotionExample] = useState(false);

    // EmotionExampleTextで選択した感情を取得する
    const [selectedEmotion, setSelectedEmotion] = useState(null);

    const addEmotionFromExample = (word) => {
      //何回もstateを呼び出すと非同期処理の副作用で行追加→emotion代入が出来なくなるため、予めwriteContentをコピー
      const newData = [...writeContents[selectSideBarIndex]]
      //現時点のwriteContentに感情欄未入力の行があるかチェックする。あれば空白がある行のindexを、ない場合は-1を返す
      const brankEmotionIndex = newData.findIndex(content => content.emotion == "");
      if (brankEmotionIndex === -1) {//感情欄が空白の行がない
        newData.push({ emotion: word, percent: '' });
      } else {
        newData[brankEmotionIndex].emotion = word
      }
      setWriteContents[selectSideBarIndex](newData)
    }

    // sidebar用ハンバーガーメニュー関連
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <WorkSpaceContext.Provider
        value={{
          selectSideBarIndex, setSelectSideBarIndex, writeContents, setWriteContents,
          isOpenWriteContentClearBtn, setIsOpenWriteContentClearBtn,
          isOpenEmotionExample, setIsOpenEmotionExample, selectedEmotion, setSelectedEmotion, addEmotionFromExample,
          isSideBarOpen, setIsSideBarOpen, 
        }}
    >
        {children}
    </WorkSpaceContext.Provider>
  )
}

export default WorkSpaceContext
