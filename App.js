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
      ), 100);
    }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'http://papodegordo.com.br/wp-content/uploads/2010/gordonocomputador.jpg'
    };
    return (
      <View style={styles.container}>
        <Greeting name="Catito" />
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
