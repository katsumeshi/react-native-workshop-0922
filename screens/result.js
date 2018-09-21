import React from "react";
import { StyleSheet, View, Image } from "react-native";
export default class Result extends React.Component {
  constructor(props) {
    super(props);
    const results = props.navigation.state.params || [];
    console.warn(results);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "結果一覧"
    };
  };

  render() {
    return <View />;
  }
}

const styles = StyleSheet.create({
  resultImage: {
    width: 200,
    height: 300
  }
});
