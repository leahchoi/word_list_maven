import React, {Component} from 'react';
import Home from './src/screens/home'
import { createStore, applyMiddleware } from 'redux';
import { Provider , connect } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers'

type Props = {};

class App extends Component<Props> {
  state = {
      book: [],
      selectedWord: null,
      modalVisible: null,
      selectedWordComplete: false,
      carouselModalVisible: false
  };

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
