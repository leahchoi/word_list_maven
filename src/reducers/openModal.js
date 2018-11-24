export default (state = null, action) => {
    switch (action.type) {
        case 'open_modal':
            console.log("inside of reducer open modal switch statement")
        // return action.payload;
        default:
            return state;
    }
};