import React, {Component} from 'react';
import Home from './src/screens/home'
import { createStore, applyMiddleware } from 'redux';
import { Provider , connect } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers'

import reducers from './src/reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

type Props = {};

class App extends Component<Props> {
  state = {
      book: [],
      selectedWord: null,
      modalVisible: null,
      selectedWordComplete: false,
      carouselModalVisible: false
  };

// const store= createStore(reducers, state, enhancer)


  // componentDidMount = () => {
  //   this.getBookList();
  // }

  // getBookList = () => {
  //   axios.get("http://localhost:3000/books")
  //     .then(resp => {
  //       this.setState({
  //         book: resp.data[0]
  //       })
  //     })
  // }

  // onSelectHandler = (state) => {
  //   if (!this.state.modalVisible) {
  //     this.setState({
  //       selectedWord: state,
  //       modalVisible: true
  //     })
  //   } else {
  //     this.setState({
  //       selectedWord: null,
  //       modalVisible: null
  //     })
  //   }
  // }


  toggleComplete = () => {
    this.setState({
      selectedWordComplete: !this.state.selectedWordComplete
    })
  }

  toggleModalView = () => {
    this.setState({
      carouselModalVisible: !this.state.carouselModalVisible
    })
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    );
  }
}

export default App;
