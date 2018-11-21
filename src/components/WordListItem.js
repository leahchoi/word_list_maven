import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'

export default class WordListItem extends Component {
  render() {
      console.log('inside of wordlist item', this.props)
    return (
        <View>
            <Text style={Styles.word}>{this.props.book.title}</Text>
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
    }
})
