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

        this.setState({
            book: this.props.selectedWord
        })
        // axios.get("http://localhost:3000/books")
        //     .then(resp => {
        //         console.log("resp", resp);
        //         this.setState({
        //             book: resp.data
        //         })
        //     })
        //     .catch(err => console.log(err))
    }

    renderWordInformation = () => {
        // if (this.state.book) {
        //     let book = this.state.book[0]
            // render list of words in list
            // console.log("Books: ", books)
            // const map = books.map((item) => {
            //     return (
            //         <WordCard 
            //             wordList={item.word_list}
            //             title={item.title}
            //             author={item.author}/>
            //     )
            // })
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

export default WordModal;