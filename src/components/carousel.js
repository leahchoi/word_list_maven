import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, StyleSheet } from 'react-native'
import WordCard from './wordCard';

class Carousel extends Component {
  render() {
      let screenWidth = Dimensions.get("window").width;
      let screenHeight = Dimensions.get("window").height;
      console.log('CAROUSEL BOOK: ', this.props.book.word_list)
      const cards = this.props.book.word_list.map((term) => {
          return (
                <View style={styles.cardContainer}>
                    <WordCard 
                        word={term}
                        title={"The Odyssey"}
                        author={"Homer"}
                        closeModal={this.props.closeModal}
                        onComplete={this.props.onComplete}/>
                </View>
            )
      })
    return (
      <ScrollView
        horizontal
        pagingEnabled={true}
        >
        {cards}
        {/* <View
            style={{
                backgroundColor: "red",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: screenWidth,
                height: screenHeight
            }}>
        </View>
        <View
            style={{
                backgroundColor: "blue",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: screenWidth,
                height: screenHeight
            }}>
        </View> */}
      </ScrollView>
    )
  }
}

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: screenWidth,
        height: screenHeight,
        marginTop: -50
    }
})

export default Carousel;