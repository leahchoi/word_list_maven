import { combineReducers } from 'redux';
import BookListReducer from './BookListReducer';

export default combineReducers({
    bookList: BookListReducer
});