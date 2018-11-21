import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import WordListItem from './WordListItem'

class WordList extends Component {
  constructor(props){
    super(props);
    // this.renderItem=this.renderItem.bind(this);
  }
  renderItem(book) {
    console.log('inside of render Item')
    debugger;
    return <WordListItem book={book}/>;
  }
  render() {
    console.log('wordlist render:', this.props)
    return (
      <View>
        <View style={Styles.wordlistInfo}>
          <Text style={Styles.totalWords}>115</Text>
          <Text style={Styles.text}>words saved</Text>
          <Text style={Styles.totalWords}>88</Text>
          <Text style={Styles.text}>mastered</Text>
        </View>
        <FlatList
          data={this.props.bookList}
          renderItem={({item})=>this.renderItem(item)}
          // renderItem={()=> <Text>Hello!</Text>}
          keyExtractor={(book) => book.id}
        // data={this.props.bookList.word_list} 
        // renderItem={ ({item}) =>  
        //     <TouchableOpacity onPress={() => this.props.onSelectHandler(item)}>
        //         <Text style={Styles.word}>Hi</Text> 
        //     </TouchableOpacity>
        // }
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
  return { bookList: state.bookList }
};

export default connect(mapStateToProps)(WordList);