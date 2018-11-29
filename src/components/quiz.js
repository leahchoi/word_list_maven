import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

class Quiz extends Component {
    state = {
        answer: "When I arrived at my office my colleagues were already clustered around the kettle.",
        answerOptions: ["comrades", "colleagues", "already", "conversate"],
        result: "",
        correct: false
    }

    runQuiz = (answer) => {
        if (this.state.answer.includes(answer)) {
            this.setState({
                correct: true,
                result: "Correct"
            })
        } else {
            this.setState({
                correct: false,
                result: "Wrong"
            })
        }
    }

  render() {
    return (
      <View style={styles.container}>
          <View>
            <Image style={{width: "100%", height: 40}} source={{uri: 'https://i.stack.imgur.com/2eXix.png'}}/>
          </View>
          <View style={styles.quizTitleContainer}>
            <Text style={styles.quizTitle}>Question 1 out of 10</Text>
          </View>
          <View style={styles.quizDisplay}>
              <Text style={styles.quizText}>"When I arrived at my office my ______________ were already clustered around the kettle." </Text>
          </View>
          <View style={styles.answerControls}>
              <View style={styles.answerRow}>
                  <TouchableOpacity style={styles.button} onPress={() => this.runQuiz(this.state.answerOptions[0])}>
                      <Text style={styles.answerText}>{this.state.answerOptions[0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => this.runQuiz(this.state.answerOptions[1])}>
                      <Text style={styles.answerText}>{this.state.answerOptions[1]}</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.answerRow}>
                  <TouchableOpacity style={styles.button} onPress={() => this.runQuiz(this.state.answerOptions[2])}>
                      <Text style={styles.answerText}>{this.state.answerOptions[2]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => this.runQuiz(this.state.answerOptions[3])}>
                      <Text style={styles.answerText}>{this.state.answerOptions[3]}</Text>
                  </TouchableOpacity>
              </View>
          </View>
          <View style={styles.resultContainer}>
              <Text style={this.state.correct ? styles.correct : styles.wrong}>{this.state.result}</Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    progressBar: {

    },
    quizTitleContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    quizTitle: {
        fontSize: 20,
        color: "grey",
        marginTop: 10,
        marginBottom: 20
    },
    quizDisplay: {
        paddingTop: 50,
        paddingBottom: 60,
        paddingRight: 20,
        paddingLeft: 20
    },
    quizText: {
        fontSize: 18
    },
    answerControls: {

    },
    button: {
        borderWidth: 2,
        borderColor: "black",
        padding: 5,
        width: 120,
        height: 40,
        marginBottom: 20
    },
    answerRow: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    answerText: {
        fontSize: 18,
        textAlign: "center"
    },
    resultContainer: {
        marginTop: 250,
        flexDirection: "row",
        justifyContent: "center"
    },
    correct: {
        fontSize: 18,
        color: "green"
    },
    wrong: {
        fontSize: 18,
        color: "red" 
    }
})

export default Quiz;