export async function fetchPHPfile(setLoadSQLData) {
    console.log("読込ボタンを押しました")
        try {
            // const res = await fetch("http://localhost/works/cbt_app/load.php")
            const res = await fetch("https://ichigatsu.sakura.ne.jp/CBT-app/load.php")
            if (!res.ok) {
                throw new Error(`レスポンスステータス： ${res.status}`);
            }
            const json = await res.json();

            const mappedJson = json.map(item => item)
            console.log('mappedJson:', mappedJson);
            setLoadSQLData(mappedJson);

        } catch(err) {
            console.error(err.message)
        }
    }