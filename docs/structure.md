# Expo、フォルダ、ファイルの役割

## Expo

React Nativeのビルドや開発をサポートしてくれるサービス。ネイティブモジュール（カメラやプッシュ通知など）を内包してくれており、簡単に使用することができます。


## フォルダ、ファイルの役割

.expo

assets/ - _メディアフォルダ_

node_modules/ - _packge.jsonを元にインストールされたライブラリ郡_

.babelrc - _BAELE(トランスコンパイラ)の設定_

.gitignore

.watchmanconfig - _ライブ、ホットリロードに使用_

App.js - _メインファイル_

app.json - _アプリの設定ファイル_

package.json - _ライブラリの依存関係のファイル_

## App.jsの説明

[App.js](https://github.com/katsumeshi/react-native-workshop-0922/blob/c07f10c9f98ff4458eeabeb230a0558711419fb5/App.js)

## StateとPropsの説明

### Props
```
class A extends React.Component {
  render() {
    return <Text>this.props.text<Text>
  }
}

class B extends React.Component {
  render() {
    return <A text="aiueo">
  }
}

```

### State
```
class A extends React.Component {

  state = { text: "" }
  
  onPress = () => this.setState({ text: "aiueo" })
  
  render() {
    return (
      <View>
          <Text>this.state.text<Text>
          <Button onPress={onPress} />
      </View>
    )
  }
}
```
