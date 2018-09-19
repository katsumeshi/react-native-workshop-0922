import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { createStackNavigator } from "react-navigation";

const options = [
  { value: "大吉", image: require("./assets/daikichi.png") },
  { value: "中吉", image: require("./assets/chukichi.png") },
  { value: "小吉", image: require("./assets/shokichi.png") },
  { value: "末吉", image: require("./assets/suekichi.png") },
  { value: "大凶", image: require("./assets/daikyo.png") }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  },
  textStyle: {
    fontSize: 40,
    color: "black"
  },
  buttonContainer: {
    backgroundColor: "#3498db",
    borderRadius: 3
  },
  buttonTitle: {
    fontSize: 25,
    color: "white",
    paddingHorizontal: 40,
    paddingVertical: 10
  }
});

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "メイン",
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate("Result", navigation.getParam("resutls"))}>
          <Text>結果一覧</Text>
        </TouchableOpacity>
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
    this.resutls = [];
  }

  pullOmikuji = () => {
    const index = Math.floor(Math.random() * options.length);
    this.resutls.push({ id: `${this.resutls.length}`, ...options[index] });
    this.props.navigation.setParams({ resutls: this.resutls });
    this.setState({
      result: options[index]
    });

    fetch("https://us-central1-omikuji-30c35.cloudfunctions.net/omikuji", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ result: index, name: "test" })
    })
      .then(res => res.json())
      .catch(error => alert(error));
  };

  render() {
    const { image } = this.state.result;
    return (
      <View style={styles.container}>
        <Image style={{ width: 200, height: 50 }} resizeMode="contain" source={require("./assets/header.png")} />
        <Text style={styles.textStyle}>今日の運勢は？</Text>
        <Image style={{ width: 200, height: 300 }} resizeMode="contain" source={image} />
        <TouchableOpacity style={styles.buttonContainer} onPress={this.pullOmikuji}>
          <Text style={styles.buttonTitle}>おみくじを引く</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class ResultScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    fetch("https://us-central1-omikuji-30c35.cloudfunctions.net/omikuji")
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data.map((item, index) => ({ id: index, ...item, ...options[item.result] })) });
      })
      .catch(error => alert(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 200, height: 50 }} resizeMode="contain" source={require("./assets/header.png")} />
        <Text style={[styles.textStyle, { marginVertical: 20 }]}>結果一覧</Text>
        <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center" }}>
              <View style={{ flexDirection: "row", marginVertical: 20 }}>
                <Text style={[{ fontSize: 15 }]}>{`名前：${item.name}`}</Text>
                <Text style={[{ fontSize: 15 }]}>{` | ${item.created_at}`}</Text>
              </View>
              <Image style={{ width: 200, height: 200 }} resizeMode="contain" source={item.image} />
            </View>
          )}
        />
      </View>
    );
  }
}

const Navigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Result: {
    screen: ResultScreen
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Navigator />;
  }
}
