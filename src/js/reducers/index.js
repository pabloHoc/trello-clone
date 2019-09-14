import { ADD_COLUMN, ADD_CARD } from 'js/constants/action-types'

const initialState = {
    columns: [],
    cards: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COLUMN:
            return {
                ...state,
                columns: [...state.columns, action.payload]
            }
        case ADD_CARD:
            return {
                ...state,
                cards: [...state.cards, action.payload]
            }
    }
    return state;
};

export default rootReducer;