import React, {Component} from 'react';
import WordListTitle from '../components/WordListTitle';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import WordModal from '../components/wordModal';
import WordList from "../components/WordList";
import axios from 'axios'
import Carousel from '../components/carousel';
import CarouselModal from '../components/carouselModal';

import { connect } from 'react-redux';
import { getBook, selectWord } from '../actions';

class Home extends Component {
  state = {
      book: {},
      modalVisible: null,
      selectedWordComplete: false,
      carouselModalVisible: false
  };

  componentDidMount = () => {
    this.getBookList();
  }

  getBookList = () => {
    this.props.getBook();
    this.setState({
      book: this.props.book
    })
  }
 
  onSelectHandler = (state) => {
    this.props.selectWord(state);
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
            book={this.props.book} 
            onSelectHandler={this.onSelectHandler} 
            selectedWordComplete={this.state.selectedWordComplete}/>
          <WordModal 
            selectedWord={this.state.selectedWord}
            closeModal={this.onSelectHandler}
            onComplete={this.toggleComplete}/>
          <TouchableOpacity
            onPress={() => this.toggleModalView()}>
            <Text>Carousel Testing</Text>
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

function mapStateToProps (state) {
    console.log("MAPSTATEPROPS: ", state)
    return {
        book: state.book.book
    }
}

export default connect(mapStateToProps, { getBook, selectWord } )(Home);