import { combineReducers } from 'redux';
import BookListReducer from './BookListReducer';
import SelectionReducer from './selectionReducer'

export default combineReducers({
    bookList: BookListReducer,
    selectedWordId: SelectionReducer,
    openModal: SelectionReducer
});