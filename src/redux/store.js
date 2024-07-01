import { createStore } from 'redux';
import produce from 'immer';

const initialState = {
    selectionScreen: 'Parties',
};

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_SELECTION_SCREEN':
            state.selectionScreen = action.payload;
            break;
        default: state.selectionScreen = 'Parties';
    }
}, initialState);

const store = createStore(reducer);
window.store = store;
export default store;
