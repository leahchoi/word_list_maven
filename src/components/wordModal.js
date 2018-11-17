import React, { Component } from 'react'
import { Modal, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import axios from 'axios';

class WordModal extends Component {
    state = {
        book: {}
    }

    componentDidMount () {
        this.getItemData();
    }
    
    getItemData = () => {
        axios.get("http://localhost:3000/books")
            .then(resp => {
                console.log("resp", resp);
                this.setState({
                    book: resp.data[0]
                })
            })
            .catch(err => console.log(err))
    }

    renderWordInformation = () => {
        if (this.state.book) {
            return (
                <View>
                    <Text>{this.state.book.title}</Text>
                    <Text>{this.state.book.author}</Text>
                </View>
            )
        }
    }

    render() {
        console.log("Book State: ", this.state.book)
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.selectedWord !== null ? true : false}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}
            >
            <View
                style={styles.modalContainer}>
                {this.renderWordInformation()}
                <TouchableOpacity onPress={() => this.props.closeModal()}>
                    <Text>Close Modal</Text>
                </TouchableOpacity>
            </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        paddingTop: 50
    }
})

export default WordModal;