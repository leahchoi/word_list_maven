import React, { Component } from 'react'
import { Modal, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import axios from 'axios';

class WordModal extends Component {
    
    getItemData = () => {
        axios.get("http://localhost:3000/books")
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
    }

    render() {
        this.getItemData();
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
                <Text>Modal Text</Text>
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