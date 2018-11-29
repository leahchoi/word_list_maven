import React, {Component} from 'react';
import Home from './src/screens/home'
import WordCard from './src/components/wordCard';
import Quiz from './src/components/quiz';
import { createStore, applyMiddleware } from 'redux';
import { Provider , connect } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import { NativeRouter, Switch, Route } from 'react-router-native';

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
        <NativeRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/word" component={WordCard}/>
            <Route exact path="/quiz" component={Quiz}/>
          </Switch>
        </NativeRouter>
      </Provider>
    );
  }
}

export default App;
