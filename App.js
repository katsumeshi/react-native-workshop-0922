import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} resizeMode="contain" source={require("./assets/kaiun.png")} />
        <Text style={styles.text}>今日の運勢は？</Text>
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
  }
});
