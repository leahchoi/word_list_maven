import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';

class WordList extends Component {
  state = {
  }

  renderCompletionStats() {
    const numberOfWords = this.props.book.word_list ? this.props.book.word_list.length : 0;
    return (
        <View style={Styles.wordlistInfo}>
          <Text style={Styles.totalWords}>{numberOfWords}</Text>
          <Text style={Styles.text}>words saved</Text>
          <Text style={Styles.totalWords}>88</Text>
          <Text style={Styles.text}>mastered</Text>
        </View>
    )
  }

  render() {
    return (
      <View>
        {this.renderCompletionStats()}
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
  word:{
    padding: 18,
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    borderWidth: 0.8,
    textAlign: 'center'
  },
  wordlistInfo:{
    alignItems: 'center',
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#333'
  },
  totalWords: {
    alignItems:'center',
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

function mapStateToProps(state) {
  return {
    book: state.book.book
  }
}

export default connect(mapStateToProps)(WordList);