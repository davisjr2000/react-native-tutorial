import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to my First React Native App!</Text>
        <Greeting name="Catito" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    color: 'skyblue',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  greeting: {
    color: 'white',
  },

});
