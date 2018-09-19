import React from 'react'; // reactライブラリのインポート
import { StyleSheet, Text, View } from 'react-native'; // react nativeのコンポーネントのインポート

// クラスの定義
// export defautl: モジュールごとに1つだけ。importする際に特に指定がなければそのクラスや関数を呼ぶ
// React.Component: React.Componentの継承。クラス内でのreactの利用
export default class App extends React.Component {
  render() { // reactのライフサイクル。描画する
    return (
      <View style={styles.container}> {/* react nativeのViewコンポーネント */}
        <Text>Open up App.js to start working on your app!</Text>{/* react nativeのTextコンポーネント */}
      </View>// 閉じタグが必要
    );
  }
}

// スタイルシートオブジェクトの作成
// StyleSheet.createでオブジェクトIdを返す
const styles = StyleSheet.create({
  container: {
    flex: 1, // flexboxを利かす
    backgroundColor: '#fff',
    alignItems: 'center', // 水平方向に中央寄せ
    justifyContent: 'center', // 垂直方向に中央寄せ
  },
});
