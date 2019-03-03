import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.state = { isShowingText: true};

    // Toggle state change every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
        ))
      ), 5000);
    }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.greeting}>Ahvey, to cansado -{this.props.name}</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>GADO TRANSALATOR</Text>
        <TextInput style={styles.input} placeholder="Type here to transalate" onChangeText={(text) => this.setState({text})}/>
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🤠').join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    color: 'skyblue',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
  },
  greeting: {
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    width: 400,
    padding: 20,
    borderRadius: 5,
    margin: 20,
  }

});
