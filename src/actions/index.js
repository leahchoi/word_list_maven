export const selectedWord = (wordId) => {
    return {
        type: 'select_word',
        payload: wordId
    };
};

export const openModalonClick = (id) => {
    return {
        type: 'open_modal',
        payload: id
    }
}