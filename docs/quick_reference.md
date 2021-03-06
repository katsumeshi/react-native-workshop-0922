## 今回のワークショップで使うJS/React

- テンプレート文字列

  ```
  const txt = 123;
  console.log(`something_${txt}`);
  ```
  
  
- スプレッド演算子

  オブジェクトの展開。配列も同じことが可能。setStateする時にする時に便利
  ```
  const a = { a: 1, b: 2 }; 
  const b = { ...a }; // シャローコピー aを書き換えてもbには影響なし
  ```
  
- 分割代入
  オブジェクトから値を取り出す。配列も同じことが可能。
  ```
  state = { a: 1, b: 2 }; 
  const { a } = state;
  ```
  
- アロー演算子
   
  イベントハンドラの処理の時に便利
  ```
  handlePress = () => { console.log("test")
  <Button onPress={handlePress} />
  ```

## Reactのライフサイクル

```
constructor() {} コンポネントの初期化時に呼ばれる

static getDerivedStateFromProps() {}　コンポネントに新しいpropsが渡された時に呼ばれる

componentDidMount() {}　コンポネントがマウントされた時に呼ばれる

shouldComponentUpdate() {}　パフォーマンス・チューニング時に触る return falseで描画をスキップ。

getSnapshotBeforeUpdate() {}　描画前に呼ばれる

componentDidUpdate() {}　描画後に呼ばれる

render() {}　描画時に呼ばれる

componentWillUnmount() {}　コンポネントがアンマウントされる時に呼ばれる
```
