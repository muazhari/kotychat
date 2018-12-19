import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';


class Main extends Component {
    onPress = () => {
      this.props.navigation.navigate('Chat', { name: this.state.name });
    }
    onChangeText = name => this.setState({ name });
    state = { name: '' }

    render() {
        return (
            <View>
                <Text style={styles.title}>Enter your name:</Text>

                <TextInput
                  style={styles.nameInput}
                  placeHolder="John Cena"
                  onChangeText={this.onChangeText}
                  value={this.state.name}
                />

                <TouchableOpacity onPress={this.onPress}>
                  <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const offset = 24;
const styles = StyleSheet.create({
  nameInput: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
});

export default Main;
