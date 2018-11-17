import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import axios from 'axios';

export default class WordListTitle extends Component {
    state = {
        bookList: null
    }

    componentDidMount() {
        this.getBookList();
    }

    getBookList = () => {
        axios.get('http://localhost:3000/books')
            .then((resp) => {
                console.log('response in axios:', resp)
                this.setState({ bookList: resp.data })
        })
        this.renderBookTitle();
    }

    renderBookTitle = () => {
        if (this.state.bookList) {
            const book = this.state.bookList.map((book) => {
                return (
                    <Text>
                        {book.title}
                    </Text>
                )
            } )
            return (
                <View>
                    {book}
                </View>
            )
        }
    }

  render() {

    return (
      <View>
          {this.renderBookTitle()}
      </View>
    );
  }
}

const Styles = StyleSheet.create({
    listTitle: {
        width: 60,
        height: 30,
        justifyContent: 'center'
    }
})