import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const options = ["大吉","吉","中吉","小吉","末吉","凶","大凶"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textStyle:{
    fontSize: 40,
    color: "black"
  },
  buttonContainer: {
    backgroundColor:"#3498db",
    borderRadius: 3,
  },
  buttonTitle:{
    fontSize: 25,
    color: "white",
    paddingHorizontal: 40,
    paddingVertical: 10,
  }
});

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      result: "今日の運勢は？"
    }
  }

  pullOmikuji = () => {
    const index = Math.floor((Math.random() * options.length));
    this.setState({
      result: options[index]
    }) 
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>{this.state.result}</Text>
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.pullOmikuji}>
              <Text style={styles.buttonTitle}>おみくじを引く</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
