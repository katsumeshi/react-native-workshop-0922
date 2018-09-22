# RNワークショップ

React Native初心者向けワークショップ

## 概要

　プレゼン形式の資料: [React Native概要](https://docs.google.com/presentation/d/1QZNlPdDMa7Z5qIz3EbZZZCX9KPmlrbJPTuJJTso9V3c/edit?usp=sharing)

### 始める前に

　コーディングに入る前に[環境設定](https://github.com/katsumeshi/react-native-workshop-0922/blob/master/docs/environment.md)を参考に環境設定してください。環境設定ができてない場合は、こちらの[実行環境](https://snack.expo.io/)をご利用ください。

#### 便利ツール

　最低限のVSCodeエクステンション（なくてもいいけどあれば便利）

 - [React Native Snippet](https://marketplace.visualstudio.com/items?itemName=jundat95.react-native-snippet)

 - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
 
#### 画像
  https://github.com/katsumeshi/react-native-workshop-0922/tree/master/assets
  
#### クイックリフェレンス
  https://github.com/katsumeshi/react-native-workshop-0922/blob/master/docs/quick_reference.md
 
## 目次

0) [今回のお題：おみくじApp](https://github.com/katsumeshi/react-native-workshop-0922/blob/master/docs/goal.md)

1) [Expo、フォルダ、ファイルの役割](https://github.com/katsumeshi/react-native-workshop-0922/blob/master/docs/structure.md)

2) **おみくじ引く画面の作成**

   2-1. [イメージとテキスト](https://github.com/katsumeshi/react-native-workshop-0922/blob/master/docs/2_1_text.md)
   
   2-2. [ボタン](https://github.com/katsumeshi/react-native-workshop-0922/blob/master/docs/2_2_button.md)
   
   2-3. [おみくじを引く](https://github.com/katsumeshi/react-native-workshop-0922/blob/master/docs/2_3_pull_omikuji.md)
   
3) **おみくじ結果一覧画面の作成**

   3-1. [ナビゲーション](https://github.com/katsumeshi/react-native-workshop-0922/blob/master/docs/3_1_navigation.md)
   
   3-2. [ナビゲーション間のデータ受け渡し](https://github.com/katsumeshi/react-native-workshop-0922/blob/master/docs/3_2_passing_data.md)
   
   3-3. [フラットリスト](https://github.com/katsumeshi/react-native-workshop-0922/blob/master/docs/3_3_flatlist.md)
   
   3-4. [ネットワーク通信](https://github.com/katsumeshi/react-native-workshop-0922/blob/master/docs/3_4_network.md)
   
**最後まで終わったら**

 - 結果一覧画面のfetch時のローディングスピナーの実装。

 - おみくじ画面の左上に名前入力のナビゲーションを作成。名前入力のテキストボックスを作成し、デバイスのローカルストレージに名前を保存。
   postリクエスト時にその名前を使用し、ハードコーディング部分をリプレイス。
