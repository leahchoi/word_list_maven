/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import WordListTitle from './src/components/WordListTitle';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import WordModal from './src/components/wordModal';
import WordList from './src/components/WordList';
import axios from 'axios'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
  state = {
      book: [],
      selectedWord: null,
      modalVisible: null
  };

  componentDidMount = () => {
    this.getBookList();
  }

  getBookList = () => {
    axios.get("http://localhost:3000/books")
      .then(resp => {
        this.setState({
          book: resp.data[0]
        })
      })
  }
 
  onSelectHandler = (state) => {
    if (!this.state.modalVisible) {
      this.setState({
        selectedWord: state,
        modalVisible: true
      })
    } else {
      this.setState({
        selectedWord: null,
        modalVisible: null
      })
    }
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <WordListTitle />
        </View>
        <WordList book={this.state.book} onSelectHandler={this.onSelectHandler}/>
        <TouchableOpacity 
          onPress={() => this.onSelectHandler()}>
          <Text>Open Modal</Text>
        </TouchableOpacity>
        <WordModal 
          selectedWord={this.state.selectedWord}
          closeModal={this.onSelectHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ced1',
  }
});
