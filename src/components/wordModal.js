import React, { Component } from 'react'
import { Modal, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import WordCard from './wordCard';
import { connect } from 'react-redux';

class WordModal extends Component {

    componentDidMount () {
    }

    renderWordInformation = () => {
        if (this.props.selectedWord) {
            return (
                <View>
                    <WordCard 
                        word={this.props.selectedWord}
                        title={"The Odyssey"}
                        author={"Homer"}
                        closeModal={this.props.closeModal}
                        onComplete={this.props.onComplete}/>
                </View>
            )
        }
    }

    render() {
        return (
            <Modal
                transparent={false}
                visible={this.props.selectedWord ? true : false}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}
            >
            <View
                style={styles.modalContainer}>
                <Text style={styles.header}>Word Cards</Text>
            </View>
            {this.renderWordInformation()}
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        paddingTop: 50,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00ced1'
    },
    header: {
        fontWeight: "bold"
    }
})

function mapStateToProps(state) {
    return {
        selectedWord: state.book.selectedWord
    }
}

export default connect(mapStateToProps, {})(WordModal);