import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class WordListItem extends Component {
    onSelectHandler = (state) => {

}
    render() {
        console.log('inside of wordlist item', this.props.book)
        return (
            <TouchableOpacity>
                <Text style={Styles.word}>{this.props.word.word}</Text>
            </TouchableOpacity>
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
