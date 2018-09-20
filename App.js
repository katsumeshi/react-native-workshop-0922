import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class App extends React.Component {
  handleOmikuji = () => {
    alert("test");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} resizeMode="contain" source={require("./assets/kaiun.png")} />
        <Text style={styles.text}>今日の運勢は？</Text>
        <Image style={styles.resultImage} resizeMode="contain" source={require("./assets/daikichi.png")} />
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
    justifyContent: "center"
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
