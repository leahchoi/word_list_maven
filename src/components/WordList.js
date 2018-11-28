import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

import { connect } from 'react-redux';
import WordListItem from './WordListItem'

class WordList extends Component {
  state = {
    0: null,
    1: null, 
    2: null, 
    3: null, 
    4: null
  }
  //helper function to append the list of words component
  renderItem(word) {
    console.log('inside of render Item')
    return <WordListItem word={word}/>;
  }
  render() {
    console.log("inside word list", this.props);
    console.log('Completed List: ', this.props.selectedWordComplete)
    console.log('wordlist render:', this.props)
    return (
      <View>
        {/* total words header */}
        <View style={Styles.wordlistInfo}>
          <Text style={Styles.totalWords}>115</Text>
          <Text style={Styles.text}>words saved</Text>
          <Text style={Styles.totalWords}>88</Text>
          <Text style={Styles.text}>mastered</Text>
        </View>
        <FlatList
            data={this.props.book.word_list} 
            renderItem={ ({item}) =>  
                <TouchableOpacity 
                    style={Styles.wordDisplay}
                    onPress={() => this.props.onSelectHandler(item)}>
                    <Text style={Styles.word}>{item.word}</Text>
                </TouchableOpacity>
            }/>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  word: {
    padding: 18,
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    borderWidth: 0.8,
    textAlign: 'center'
  },
  wordlistInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#333'
  },
  totalWords: {
    alignItems: 'center',
    fontSize: 35,
    color: '#e67e22',
    paddingRight: 9,
    paddingLeft: 30
  },
  text: {
    fontSize: 14,
    flexDirection: 'column',
    color: 'white',
    justifyContent: 'center'
  }
})

const mapStateToProps = state => {
  //updating state with bookList keyword&value
  return { bookList: state.bookList }
};

//connecting redux & WordList component
export default connect(mapStateToProps)(WordList);