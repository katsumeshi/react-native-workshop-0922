import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import { IMAGE_OPTIONS } from "../src/constatns";
import { postResult } from "../src/api";

export default class Omikuji extends React.Component {
  state = {
    image: null
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: "おみくじ",
      headerRight: <Button onPress={() => navigation.navigate("Result", navigation.getParam("resutls"))} title="結果一覧" color="black" />
    };
  };

  handleOmikuji = () => {
    const index = Math.floor(Math.random() * IMAGE_OPTIONS.length);
    postResult(index, "yuki");
    this.setState({
      image: IMAGE_OPTIONS[index]
    });
  };

  render() {
    const { image } = this.state;
    return (
      <View style={styles.container}>
        <Image style={styles.image} resizeMode="contain" source={require("../assets/kaiun.png")} />
        <Text style={styles.text}>今日の運勢は？</Text>
        <Image style={styles.resultImage} resizeMode="contain" source={image} />
        <TouchableOpacity style={styles.buttonContainer} onPress={this.handleOmikuji}>
          <Text style={styles.buttonTitle}>おみくじを引く</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  },
  text: {
    fontSize: 40
  },
  image: {
    width: 200,
    height: 50
  },
  resultImage: {
    width: 200,
    height: 300
  },
  buttonContainer: {
    backgroundColor: "#3498db"
  },
  buttonTitle: {
    fontSize: 25,
    color: "white",
    paddingHorizontal: 40,
    paddingVertical: 10
  }
});
