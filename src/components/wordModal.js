import React, { Component } from 'react'
import { Modal, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import axios from 'axios';
import WordCard from './wordCard';

class WordModal extends Component {
    state = {
        book: null
    }

    componentDidMount () {
        this.getItemData();
    }
    
    getItemData = () => {
        axios.get("http://localhost:3000/books")
            .then(resp => {
                console.log("resp", resp);
                this.setState({
                    book: resp.data
                })
            })
            .catch(err => console.log(err))
    }

    renderWordInformation = () => {
        if (this.state.book) {
            let books = this.state.book
            console.log("Books: ", books)
            const map = books.map((item) => {
                return (
                    <WordCard 
                        book={item}
                        title={item.title}
                        author={item.author}/>
                )
            })
            return (
                <View>
                    {map}
                </View>
            )
        }
    }

    render() {
        console.log("Book State: ", this.state.book)
        return (
            <Modal
                transparent={false}
                visible={this.props.selectedWord !== null ? true : false}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}
            >
            <View
                style={styles.modalContainer}>
                <Text>Word Cards</Text>
            </View>
            {this.renderWordInformation()}
            <TouchableOpacity onPress={() => this.props.closeModal()}>
                <Text>Close Modal</Text>
            </TouchableOpacity>
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
        backgroundColor: 'cyan'
    }
})

export default WordModal;