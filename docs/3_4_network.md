# 設問


```
const API_URL = "https://us-central1-omikuji-30c35.cloudfunctions.net/omikuji";
```

1) おみくじ引いた結果をAPI_URLにpostで送信。([参考](https://facebook.github.io/react-native/docs/network.html))
```
headers　"Content-Type": "application/json"
body     { result: おみくじ値, name: 名前 }
```

2) 結果一覧でAPI_URLにgetでおみくじの結果を要求。

# 結果
<div>
<kbd><img  src="https://github.com/katsumeshi/react-native-workshop-0922/blob/master/docs/assets/ss6.png" height="500"></kbd>
<kbd><<img  src="https://github.com/katsumeshi/react-native-workshop-0922/blob/master/docs/assets/ss10.png" height="500"></kbd>
</div>

# 回答
https://github.com/katsumeshi/react-native-workshop-0922/commit/f0e8c20890d4d8d9e5d5111e4d50770c6cd5d1a2
