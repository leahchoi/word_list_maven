import React, { Component } from 'react'
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

class WordCard extends Component {

    // renderCards = () => {
    //     if (this.props.wordList) {
    //         const card = this.props.wordList.map((word) => {
    //             return (
    //                 <View style={styles.cardContainer}>
    //                     <View style={styles.cardHeader}>
    //                         <TouchableOpacity style={styles.arrowContainer}>
    //                             <Text style={styles.arrow}>{"\<"}</Text>
    //                         </TouchableOpacity>
    //                         <Image 
    //                             style={{width: 75, height: 100, margin: 20}}
    //                             source={{uri: "https://i.harperapps.com/covers/9780061244186/y648.jpg"}}/>
    //                         <View style={styles.bookInfo}>
    //                             <Text style={styles.title}>{this.props.title}</Text>
    //                             <Text>{this.props.author}</Text>
    //                         </View>
    //                         <TouchableOpacity style={styles.arrowContainer}>
    //                             <Text style={styles.arrow}>{"\>"}</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={styles.wordContainer}>
    //                         <TouchableOpacity>
    //                             <Text style={styles.soundButton}>Sound Button</Text>
    //                         </TouchableOpacity>
    //                         <View>
    //                             <Text style={styles.word}>{word.word}</Text>
    //                         </View>
    //                         <View>
    //                             <Text>{word.type} | {word.punctuation} </Text>
    //                         </View>
    //                     </View>
    //                     <View style={styles.definition}>
    //                         <Text>Definition: {word.definition}</Text>
    //                         <Text>Example: {word.example}</Text>
    //                     </View>
    //                 </View>
    //             )
    //         })
    //         return (
    //             <View style={styles.horizontalContainer}>
    //                 {card}
    //             </View>
    //         )
    //     }
    // }

  render() {
        const { word, punctuation, definition, type, example } = this.props.wordList
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <TouchableOpacity 
                        style={styles.closeButtonContainer}
                        onPress={() => this.props.closeModal()}>
                        <Text style={styles.closeButton}>X</Text>
                    </TouchableOpacity>
                    <View style={styles.cardHeader}>
                        <TouchableOpacity style={styles.arrowContainer}>
                            <Text style={styles.arrow}>{"\<"}</Text>
                        </TouchableOpacity>
                        <Image 
                            style={{width: 75, height: 100, margin: 20}}
                            source={{uri: "https://i.harperapps.com/covers/9780061244186/y648.jpg"}}/>
                        <View style={styles.bookInfo}>
                            <Text style={styles.title}>{this.props.title}</Text>
                            <Text>{this.props.author}</Text>
                        </View>
                        <TouchableOpacity style={styles.leftArrow}>
                            <Text style={styles.arrow}>{"\>"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.wordContainer}>
                        <TouchableOpacity>
                            <Text style={styles.soundButton}>Sound Button</Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.word}>{word}</Text>
                        </View>
                        <View>
                            <Text>{type} | {punctuation} </Text>
                        </View>
                    </View>
                    <View style={styles.definition}>
                        <Text>Definition: {definition}</Text>
                        <Text>Example: {example}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.3,
        borderColor: "black",
        margin: 10,
        borderRadius: 5
    },
    cardContainer: {
        height: 680
    },
    horizontalContainer: {
    },
    cardHeader: {
        flexDirection: "row",
    },
    bookInfo: {
        flexDirection: "column",
        justifyContent: "center"
    },
    arrowContainer: {
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: 16,
    },
    arrow: {
        fontSize: 25
    },
    leftArrow: {
        flexDirection: "row",
        justifyContent: "center",
        paddingLeft: 16,
        alignItems: "center",
        marginLeft: 65
    },
    word: {
        padding: 10,
        fontSize: 30,
        fontWeight: "bold"
    },
    wordContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    soundButton: {
        fontWeight: "bold"
    },
    definition: {
        paddingTop: 30,
        padding: 15
    },
    closeButtonContainer: {
        alignItems: "flex-end"
    },
    closeButton: {
        fontSize: 20,
        fontWeight: "bold",
        paddingRight: 15,
        paddingTop: 15
    },
    title: {
        fontSize: 15,
        fontWeight: "700"
    }
})

export default WordCard;