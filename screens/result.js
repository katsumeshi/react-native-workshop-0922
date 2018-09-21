import React from "react";
import { StyleSheet, View, Image, FlatList } from "react-native";
import { IMAGE_OPTIONS } from "../constatns";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.results = props.navigation.state.params || [];
  }

  static navigationOptions = () => {
    return {
      title: "結果一覧"
    };
  };

  render() {
    return (
      <FlatList
        data={this.results}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <View style={styles.container}>
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
  resultImage: {
    width: 200,
    height: 300
  }
});
