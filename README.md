# CBT-app
認知行動療法(CBT)のコラム表を Web 化し、入力・保存・共有を可能にするアプリ。

## デモ
![desktop](docs/screenshot_desktop.png)
![mobile](docs/screenshot_mobile.png)

## 特徴
- MUI を利用したレスポンシブ UI（960 px を境に切替）
- PHP + MySQL による CRUD（保存 / 読込 / 削除）
- JSON エクスポートでカウンセラーや AI と共有可能
- 感情ラベル選択 UI など CBT 専用コンポーネントを実装

## 技術スタック
### Frontend
- React 19 + Vite 6
- MUI 6
### Backend
- PHP 8.4.4
- MySQL 8.0
### その他
- Context API / Hooks
- Vercel へのフロント単体デプロイ

## セットアップ
```bash
# フロントエンド
git clone https://github.com/ichigatsu01/CBT_app.git
cd CBT_app
npm install
npm run dev            # → http://localhost:5173

# バックエンド (例: ローカルで動かす場合)
cd api                 # ← php ファイルを配置しているフォルダ
php -S localhost:8000  # PHP 開発用サーバ

# .env.sample を .env にコピーして API_URL を書き換える
```

## ディレクトリ構成(srcディレクトリ以下)
src
├─components                # UI部品（画面上部：header, 画面下部：workspace）
│  ├─header
│  │  ├─hamburger-menu      # レスポンシブデザイン向け部品
│  │  ├─header-function     # 保存、読込などの諸機能
│  │  └─header-input        # コラム表のタイトル、作成日などの共通項目入力欄
│  └─workspace
│      ├─side-bar           # コラム表の各欄を表示する
│      └─writing-area       # テキストの入力エリア
│          └─single-help    # 各項目に表示するための個別ヘルプ
├─context                   # Global state (HeaderProvider / WorkSpaceProvider)
├─App.jsx
└─main.jsx

### 作成経緯
自身もカウンセリングでコラム表を作成することがありましたが、紙に手書きで作成していました。
後日の振り返り、あるいは出来事に遭遇したタイミングで書きたいと感じたことがあり、アプリ化しました。