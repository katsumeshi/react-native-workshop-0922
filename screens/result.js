import React from "react";
import { StyleSheet, View, Image, FlatList, Text } from "react-native";
import { IMAGE_OPTIONS } from "../constatns";
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
    const data = await getResults();
    this.setState({ results: data.map((item, index) => ({ id: index, ...item })) });
  }

  render() {
    return (
      <FlatList
        data={this.state.results}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.rowContainer}>
              <Text style={styles.text}>{`名前：${item.name}`}</Text>
              <Text style={styles.text}>{` | ${item.created_at}`}</Text>
            </View>
            <Image style={styles.resultImage} resizeMode="contain" source={IMAGE_OPTIONS[item.result]} />
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
