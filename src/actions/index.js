import types from "./types";
import axios from 'axios';

export function getBook() {
    return (dispatch) => {
        axios.get("http://localhost:3000/books")
            .then(resp => {
                dispatch({
                    type: types.GET_BOOK,
                    payload: resp.data[0],
                })
        })
    }
}

export function selectWord( word ) {
    return (dispatch) => {
        dispatch({
            type: types.SELECT_WORD,
            payload: word
        })

    }
}