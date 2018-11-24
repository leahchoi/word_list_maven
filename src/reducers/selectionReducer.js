export default ( state = null, action ) => {
    switch (action.type) {
        case 'select_word':
            return action.payload;
        case 'open_modal':
        // console.log("inside of reducer open modal switch statement", action.payload)
            return action.payload;
        default:
        return state;
    }
};