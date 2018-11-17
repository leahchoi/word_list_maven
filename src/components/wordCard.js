import React, { Component } from 'react'
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

class WordCard extends Component {

    renderCards = () => {
        if (this.props.book) {
            const card = this.props.book.word_list.map((word) => {
                return (
                    <View style={styles.cardContainer}>
                        <View style={styles.cardHeader}>
                            <View style={styles.arrowContainer}>
                                <Text style={styles.arrow}>{"\<"}</Text>
                            </View>
                            <Image 
                                style={{width: 75, height: 100, margin: 20}}
                                source={{uri: "https://i.harperapps.com/covers/9780061244186/y648.jpg"}}/>
                            <View style={styles.bookInfo}>
                                <Text>{this.props.title}</Text>
                                <Text>{this.props.author}</Text>
                            </View>
                            <View style={styles.arrowContainer}>
                                <Text style={styles.arrow}>{"\>"}</Text>
                            </View>
                        </View>
                        <View style={styles.wordContainer}>
                            <TouchableOpacity>
                                <Text style={styles.soundButton}>Sound Button</Text>
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.word}>{word.word}</Text>
                            </View>
                            <View>
                                <Text>{word.type} | {word.punctuation} </Text>
                            </View>
                        </View>
                        <View style={styles.definition}>
                            <Text>Definition: {word.definition}</Text>
                            <Text>Example: {word.example}</Text>
                        </View>
                    </View>
                )
            })
            return (
                <View>
                    {card}
                </View>
            )
        }
    }

  render() {
    return (
        <View style={styles.container}>
            <ScrollView>
                {this.renderCards()}
            </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "black",
        margin: 10,
        borderRadius: 5
    },
    cardContainer: {
        borderWidth: 1,
        borderColor: "black"
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
        padding: 10
    }
})

export default WordCard;