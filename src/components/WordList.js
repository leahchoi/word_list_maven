import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import WordListItem from './WordListItem'

class WordList extends Component {
  //helper function to append the list of words component
  renderItem(word) {
    console.log('inside of render Item')
    return <WordListItem word={word}/>;
  }
  render() {
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
        {/* looping through each others within the list */}
        <FlatList
          data={this.props.bookList.books[0].word_list}
          renderItem={({item})=>this.renderItem(item)}
          keyExtractor={(book) => book.id}
        />
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