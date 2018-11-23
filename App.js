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
import Carousel from './src/components/carousel';
import CarouselModal from './src/components/carouselModal';

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
      modalVisible: null,
      selectedWordComplete: false,
      carouselModalVisible: false
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

  toggleComplete = () => {
    this.setState({
      selectedWordComplete: !this.state.selectedWordComplete
    })
  }

  toggleModalView = () => {
    this.setState({
      carouselModalVisible: !this.state.carouselModalVisible
    })
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <WordListTitle />
        </View>
        <WordList 
          book={this.state.book} 
          onSelectHandler={this.onSelectHandler} 
          selectedWordComplete={this.state.selectedWordComplete}/>
        <WordModal 
          selectedWord={this.state.selectedWord}
          closeModal={this.onSelectHandler}
          onComplete={this.toggleComplete}/>
        <TouchableOpacity
          onPress={() => this.toggleModalView()}>
          <Text>Modal Open</Text>
        </TouchableOpacity>
        <CarouselModal 
          carouselModalVisible={this.state.carouselModalVisible} 
          closeModal={this.onSelectHandler}
          onComplete={this.toggleComplete}
          book={this.state.book}/>
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
