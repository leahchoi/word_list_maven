/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import WordListTitle from './src/components/WordListTitle';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import WordModal from './src/components/wordModal';
import WordList from './src/components/WordList';
import axios from 'axios';
import reducers from './src/reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

type Props = {};

export default class App extends Component<Props> {
  state = {
    book: [],
    selectedWord: null,
    modalVisible: null
  };

// const store= createStore(reducers, state, enhancer)


  // componentDidMount = () => {
  //   this.getBookList();
  // }

  // getBookList = () => {
  //   axios.get("http://localhost:3000/books")
  //     .then(resp => {
  //       this.setState({
  //         book: resp.data[0]
  //       })
  //     })
  // }

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
      <Provider store={createStore(reducers)}>
        <View>
          <View style={styles.container}>
            <WordListTitle />
          </View>
          <WordList />
          {/* book={this.state.book} onSelectHandler={this.onSelectHandler} */}
          <WordModal
            selectedWord={this.state.selectedWord}
            closeModal={this.onSelectHandler} />
        </View>
      </Provider>
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
