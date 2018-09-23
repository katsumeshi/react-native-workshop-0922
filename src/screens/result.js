import React from "react";
import { StyleSheet, View, Image, FlatList, Text } from "react-native";
import { getImage } from "../pull";
import { getResults } from "../api";

export default class Result extends React.Component {
  state = {
    results: []
  };

  static navigationOptions = () => {
    return {
      title: "結果一覧"
    };
  };

  async componentDidMount() {
    const results = await getResults();
    this.setState({ results });
  }

  render() {
    return (
      <FlatList
        data={this.state.results}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `${item.created_at}`}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.rowContainer}>
              <Text style={styles.text}>{`名前：${item.name}`}</Text>
              <Text style={styles.text}>{` | ${new Date(item.created_at).toLocaleString()}`}</Text>
            </View>
            <Image style={styles.resultImage} resizeMode="contain" source={getImage(item.result)} />
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  rowContainer: {
    flexDirection: "row",
    marginVertical: 20
  },
  text: {
    fontSize: 15
  },
  resultImage: {
    width: 200,
    height: 300
  }
});
