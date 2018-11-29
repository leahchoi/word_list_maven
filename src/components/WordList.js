import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import WordListItem from './WordListItem'
import { withRouter } from "react-router-native";

class WordList extends Component {

  state = {
  }

  renderCompletionStats() {
    const numberOfWords = this.props.book.word_list ? this.props.book.word_list.length : 0;
    return (
        <View style={Styles.wordlistInfo}>
          <Text style={Styles.text}>
            <Text style={Styles.totalWords}>{numberOfWords} </Text>words saved
          </Text>
          <Text style={Styles.text}>
            <Text style={Styles.totalWords}>0 </Text>mastered
          </Text>
        </View>
    )
  }

  render() {
    let { history, match, location } = this.props;
    return (
      <View>
        {this.renderCompletionStats()}
        <View style={Styles.bookHeader}>
          <Image 
            style={{width: 75, height: 100, margin: 20}}
            source={{uri: "https://i.harperapps.com/covers/9780061244186/y648.jpg"}}/>
          <View style={Styles.bookInfo}>
            <Text style={Styles.title}>{this.props.book.title}</Text>
            <Text>{this.props.book.author}</Text>
          </View> 
          <View style={Styles.quizButtonContainer}>
            <TouchableOpacity onPress={() => history.push("/quiz")}>
              <View style={Styles.quizButton}>
                <Text style={Styles.quizText}>Quiz</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
            data={this.props.book.word_list} 
            renderItem={ ({item}) =>  
                <TouchableOpacity 
                    style={Styles.wordDisplay}
                    // push to location / history
                    onPress={() => this.props.onSelectHandler(item)}>
                    {/* onPress={() => history.push("/word", {word: item})}> */}
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
    backgroundColor: '#333',
    justifyContent: "space-around"
  },
  totalWords: {
    // alignItems: 'center',
    fontSize: 35,
    color: '#e67e22',
    // paddingRight: 9,
    // paddingLeft: 30,
    marginRight: 100
  },
  text: {
    fontSize: 14,
    flexDirection: 'column',
    color: 'white',
    justifyContent: 'center'
  },
  bookHeader: {
    flexDirection: "row",
  },
  bookInfo: {
      flexDirection: "column",
      justifyContent: "center"
  },
  title: {
    fontSize: 15,
    fontWeight: "700"
  },
  quizButton: {
    backgroundColor: "orange",
    paddingTop: 5, 
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15
  },
  quizButtonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 65,
    shadowColor: "grey",
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0, 
      height: 3
    }
  },
  quizText: {
    fontSize: 18
  }
})

function mapStateToProps(state) {
  return {
    book: state.book.book
  }
}

export default withRouter(connect(mapStateToProps)(WordList));