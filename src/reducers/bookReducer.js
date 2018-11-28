const initialState = {
    book: {},
    selectedWord: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "GET_BOOK":
            return {
                book: action.payload,
                selectedWord: null
            }
        case "SELECT_WORD":
            return {
                ...state,
                selectedWord: action.payload
            }
        default: 
            return state
    }
}