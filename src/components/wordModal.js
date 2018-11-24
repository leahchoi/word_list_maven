import React, { Component } from 'react'
import { Modal, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../actions';
import WordCard from './wordCard';

class WordModal extends Component {
    // state = {
    //     book: null
    // }

    componentDidMount() {
        this.getItemData();
    }

    getItemData = () => {

        // this.setState({
        //     book: this.props.selectedWord
        // })
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
        const { word, title, author} = this.props

            return (
                <View>
                    <WordCard
                        word={word}
                        title={title}
                        author={author}
                        closeModal={this.props.openModal} />
                </View>
            )
    }

    render() {
        console.log("wordmodal props: ", this.props)
        return (
            <Modal
                transparent={false}
                visible={this.props.selectedWordId !== null ? true : false}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}
            >
                <View
                    style={styles.modalContainer}>
                    <Text>Word Cards</Text>
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
    }
})

// const mapStateToProps = state => {
//     return { openModal: state.openModal }
// }
export default connect(null, actions)(WordModal)