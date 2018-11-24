// goes through a switch statement according to the type
export default ( state = null, action ) => {
    switch (action.type) {
        case 'select_word':
            return action.payload;
        case 'open_modal':
            return action.payload;
        default:
        return state;
    }
};