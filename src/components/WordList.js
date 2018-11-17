import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';


export default class WordList extends Component {

  render() {
    console.log("inside word list", this.props);
    return (
      <View>
        <FlatList 
            data={this.props.book.word_list} 
            renderItem={ ({item}) =>  
                <TouchableOpacity>
                    <Text>{item.word}</Text> 
                </TouchableOpacity>
            }/>
      </View>
    )
  }
}
