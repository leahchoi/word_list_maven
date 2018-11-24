import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../actions';
import WordModal from './wordModal'

class WordListItem extends Component {
    renderModal() {
        const { openModal } = this.props;
        if (openModal) {
            console.log('openmodal is true', this.props)
            return (
                <WordModal word={this.props.word}/>
                )
        }
    }
    render() {
        const { id, word } = this.props.word;
        console.log('inside of wordlist item', this.props)
        return (
            <TouchableOpacity onPress={() => this.props.openModalonClick(id)}>
                <View>
                    <Text style={Styles.word}>{word}</Text>
                </View>
                {this.renderModal()}

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

const mapStateToProps = (state, ownProps) => {
    const openModal = state.selectedWordId === ownProps.word.id
    return { openModal: openModal,
        selectedWord: state.openModalonClick
    }
}
export default connect(mapStateToProps, actions)(WordListItem)