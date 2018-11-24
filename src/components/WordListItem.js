import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../actions';
import WordModal from './wordModal'

class WordListItem extends Component {
    // helper function to append the wordModal onto the DOM
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
            // on click, calls the action openModalonClick by passing on the word id
            <TouchableOpacity onPress={() => this.props.openModalonClick(id)}>
                <View>
                    <Text style={Styles.word}>{word}</Text>
                </View>
            {/* calls the renderModal (helper function) to display/not display the modal */}
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
    // checks to see if openModal is 'true' or 'false' 
    const openModal = state.selectedWordId === ownProps.word.id
    // adds the keys & values below to state
    return { openModal: openModal,
        selectedWord: state.openModalonClick
    }
}
export default connect(mapStateToProps, actions)(WordListItem)