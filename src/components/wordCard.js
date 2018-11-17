import React, { Component } from 'react'
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native'

class WordCard extends Component {

    renderCards = () => {
        if (this.props.book) {
            const card = this.props.book.word_list.map((word) => {
                return (
                    <View style={styles.cardContainer}>
                        <View>
                            <Text>Sound Button</Text>
                        </View>
                        <View>
                            <Text>{word.word}</Text>
                        </View>
                        <View>
                            <Text>{word.part_of_speech} | {word.punctuation} </Text>
                        </View>
                        <View>
                            <Text>{word.definition}</Text>
                            <Text>{word.example}</Text>
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
        padding: 20,
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
    }
})

export default WordCard;