import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import Carousel from './carousel';

class CarouselModal extends Component {
    render () {
        return (
            <Modal
                transparent={false}
                visible={this.props.carouselModalVisible ? true : false}>
                <View
                    style={styles.modalContainer}>
                    <Text style={styles.header}>Word Cards</Text>
                </View>
                <Carousel 
                    book={this.props.book}
                    closeModal={this.props.closeModal}
                    onComplete={this.props.onComplete}/>
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

export default CarouselModal;